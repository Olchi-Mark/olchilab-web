import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const NOTION_VERSION = "2026-03-11";
const DEFAULT_BUDGET_LIMIT = 700000;
const DEFAULT_INQUIRY_TARGET = 20;
const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_PATH = join(ROOT_DIR, "public", "data", "promotion-dashboard.json");
const LOCAL_CONFIG_PATH = join(ROOT_DIR, "promotion-dashboard.config.local.json");
const EXAMPLE_CONFIG_PATH = join(ROOT_DIR, "promotion-dashboard.config.example.json");

async function loadEnvFile(filePath) {
  try {
    const text = await readFile(filePath, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;

      const key = trimmed.slice(0, separator).trim();
      const rawValue = trimmed.slice(separator + 1).trim();
      if (!key || process.env[key]) continue;

      process.env[key] = rawValue.replace(/^['"]|['"]$/g, "");
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

async function loadDashboardConfig() {
  try {
    const text = await readFile(LOCAL_CONFIG_PATH, "utf8");
    const config = JSON.parse(text);
    const dataSources = config.dataSources ?? {};
    const requiredKeys = ["projects", "contents", "budget", "reports", "checks", "ideas"];
    const missing = requiredKeys.filter((key) => !dataSources[key]);

    if (missing.length > 0) {
      throw new Error(`Missing data source ids: ${missing.join(", ")}`);
    }

    return { dataSources };
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        `Missing local dashboard config. Copy ${EXAMPLE_CONFIG_PATH} to ${LOCAL_CONFIG_PATH} and fill data source ids.`
      );
    }
    throw error;
  }
}

function plainText(richText = []) {
  return richText.map((item) => item.plain_text ?? "").join("");
}

function notionDateToValue(date) {
  if (!date) return null;
  return date.start ?? null;
}

function propertyToValue(property) {
  if (!property) return null;

  switch (property.type) {
    case "title":
      return plainText(property.title);
    case "rich_text":
      return plainText(property.rich_text);
    case "select":
      return property.select?.name ?? null;
    case "status":
      return property.status?.name ?? null;
    case "multi_select":
      return (property.multi_select ?? []).map((item) => item.name);
    case "date":
      return notionDateToValue(property.date);
    case "number":
      return property.number ?? null;
    case "checkbox":
      return Boolean(property.checkbox);
    case "url":
      return property.url ?? null;
    case "relation":
      return (property.relation ?? []).map((item) => item.id);
    case "rollup":
      return rollupToValue(property.rollup);
    case "formula":
      return formulaToValue(property.formula);
    default:
      return null;
  }
}

function formulaToValue(formula = {}) {
  if (!formula.type) return null;
  if (formula.type === "date") return notionDateToValue(formula.date);
  return formula[formula.type] ?? null;
}

function rollupToValue(rollup = {}) {
  if (!rollup.type) return null;
  if (rollup.type === "array") {
    return (rollup.array ?? []).map(propertyToValue);
  }
  if (rollup.type === "date") return notionDateToValue(rollup.date);
  return rollup[rollup.type] ?? null;
}

function pageToRow(page) {
  const properties = page.properties ?? {};
  const values = Object.fromEntries(
    Object.entries(properties).map(([name, property]) => [name, propertyToValue(property)])
  );

  return {
    id: page.id,
    url: page.url ?? "",
    title:
      Object.values(properties)
        .filter((property) => property?.type === "title")
        .map(propertyToValue)
        .find(Boolean) ?? "Untitled",
    createdAt: page.created_time ?? null,
    updatedAt: page.last_edited_time ?? null,
    properties: values,
  };
}

async function queryDataSource(dataSourceId) {
  const rows = [];
  let startCursor;

  do {
    const body = {
      page_size: 100,
      ...(startCursor ? { start_cursor: startCursor } : {}),
    };
    const response = await fetch(
      `https://api.notion.com/v1/data_sources/${dataSourceId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Notion data source query failed (${response.status}): ${data.code ?? "unknown"}`
      );
    }

    rows.push(...(data.results ?? []).filter((item) => item.object === "page").map(pageToRow));
    startCursor = data.has_more ? data.next_cursor : null;
  } while (startCursor);

  return rows;
}

function numberValue(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function dateValue(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toDateKey(date) {
  if (!date) return "";
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getMonday(date) {
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  return addDays(date, diff);
}

function inferTone(status = "", index = 0) {
  if (status.includes("진행") || status.includes("제작")) return "progress";
  if (status.includes("검토")) return "review";
  if (status.includes("예약") || status.includes("완료")) return "ready";
  return index % 2 === 0 ? "draft" : "teal";
}

function buildCampaigns(projectRows) {
  const statusOrder = ["준비", "진행 중", "검토", "완료"];
  return [...projectRows]
    .sort((a, b) => {
      const statusA = statusOrder.indexOf(a.properties["상태"] ?? "");
      const statusB = statusOrder.indexOf(b.properties["상태"] ?? "");
      return (statusA === -1 ? 99 : statusA) - (statusB === -1 ? 99 : statusB);
    })
    .map((row, index) => ({
      id: row.id,
      title: row.properties["캠페인명"] || row.title,
      status: row.properties["상태"] || "상태 없음",
      priority: row.properties["우선순위"] || "",
      channels: Array.isArray(row.properties["채널"]) ? row.properties["채널"] : [],
      description: row.properties["목표"] || row.properties["메모"] || "",
      memo: row.properties["메모"] || "",
      startDate: row.properties["시작일"] || null,
      dueDate: row.properties["마감일"] || null,
      contentCount: numberValue(row.properties["콘텐츠 수"]),
      checkCount: numberValue(row.properties["체크 수"]),
      budgetTotal: numberValue(row.properties["예산 합계"]),
      inquiryTotal: numberValue(row.properties["문의 합계"]),
      tone: index === 1 || row.properties["상태"] === "진행 중" ? "lime" : "teal",
    }));
}

function buildWeek(contents) {
  const dated = contents
    .map((row) => ({
      row,
      date: dateValue(row.properties["게시일"]),
    }))
    .filter((item) => item.date);
  const firstDate = dated[0]?.date ?? new Date();
  const monday = getMonday(firstDate);
  const byDate = new Map(dated.map((item) => [toDateKey(item.date), item.row]));
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return days.map((day, index) => {
    const date = addDays(monday, index);
    const key = toDateKey(date);
    const row = byDate.get(key);
    const status = row?.properties["상태"] || "";

    return {
      date: key,
      day,
      label: `${date.getMonth() + 1}/${date.getDate()}`,
      title: row?.properties["콘텐츠명"] || "비어 있음",
      status,
      channel: row?.properties["채널"] || "",
      tone: index === 5 ? "sat" : index === 6 ? "sun" : inferTone(status, index),
    };
  });
}

function buildBudgetSummary(budgetRows, projectRows) {
  const spent = budgetRows.reduce((sum, row) => sum + numberValue(row.properties["금액"]), 0);
  const projectRollupTotal = projectRows.reduce(
    (sum, row) => sum + numberValue(row.properties["예산 합계"]),
    0
  );
  const configuredLimit = numberValue(process.env.PROMOTION_DASHBOARD_BUDGET_LIMIT);
  const total = Math.max(configuredLimit || DEFAULT_BUDGET_LIMIT, spent, projectRollupTotal);
  const percent = total > 0 ? Math.round((spent / total) * 100) : 0;

  return {
    spent,
    total,
    remaining: Math.max(total - spent, 0),
    percent,
    items: budgetRows.map((row) => ({
      title: row.properties["항목명"] || row.title,
      amount: numberValue(row.properties["금액"]),
      status: row.properties["상태"] || "",
      date: row.properties["날짜"] || null,
      category: row.properties["분류"] || "",
    })),
  };
}

function buildReports(reportRows, checkRows) {
  const inquiries = reportRows.reduce((sum, row) => sum + numberValue(row.properties["문의수"]), 0);
  const views = reportRows.reduce((sum, row) => sum + numberValue(row.properties["조회수"]), 0);
  const conversions = reportRows.reduce((sum, row) => sum + numberValue(row.properties["전환수"]), 0);
  const completed = checkRows.filter((row) => Boolean(row.properties["완료"])).length;
  const completionRate = checkRows.length > 0 ? Math.round((completed / checkRows.length) * 100) : 0;

  return {
    inquiries,
    inquiryTarget: numberValue(process.env.PROMOTION_DASHBOARD_INQUIRY_TARGET, DEFAULT_INQUIRY_TARGET),
    views,
    conversions,
    completionRate,
  };
}

function buildSnapshot(rowsBySource) {
  const campaigns = buildCampaigns(rowsBySource.projects);
  const budget = buildBudgetSummary(rowsBySource.budget, rowsBySource.projects);
  const reports = buildReports(rowsBySource.reports, rowsBySource.checks);
  const generatedAt = new Date().toISOString();

  return {
    version: 1,
    generatedAt,
    source: {
      type: "notion-readonly-snapshot",
      page: "올치클래스 홍보 프로젝트 관리판 v1",
      rowCounts: Object.fromEntries(
        Object.entries(rowsBySource).map(([name, rows]) => [name, rows.length])
      ),
    },
    header: {
      kicker: "OlchiClass · promotion operations",
      title: "올치클래스 홍보 운영판",
      statusLabel: "Notion snapshot",
      periodLabel: generatedAt.slice(0, 10),
    },
    metrics: [
      {
        label: "진행 캠페인",
        value: String(campaigns.length),
        detail: campaigns.map((campaign) => campaign.title).join(" · ") || "등록 없음",
      },
      {
        label: "콘텐츠",
        value: String(rowsBySource.contents.length),
        detail: rowsBySource.contents
          .map((row) => row.properties["상태"])
          .filter(Boolean)
          .join(" · ") || "등록 없음",
      },
      {
        label: "예산 집행",
        value: `${budget.percent}%`,
        detail: `${budget.spent.toLocaleString("ko-KR")} / ${budget.total.toLocaleString("ko-KR")}원`,
      },
      {
        label: "문의 목표",
        value: `${reports.inquiries} / ${reports.inquiryTarget}`,
        detail: "이번 달 목표 대비",
      },
    ],
    campaigns,
    contents: rowsBySource.contents.map((row) => ({
      id: row.id,
      title: row.properties["콘텐츠명"] || row.title,
      status: row.properties["상태"] || "",
      channel: row.properties["채널"] || "",
      type: row.properties["형식"] || "",
      date: row.properties["게시일"] || null,
      cta: row.properties["CTA"] || "",
      link: row.properties["링크"] || "",
    })),
    week: buildWeek(rowsBySource.contents),
    checks: rowsBySource.checks.map((row) => ({
      id: row.id,
      title: row.properties["체크 항목"] || row.title,
      done: Boolean(row.properties["완료"]),
      status: row.properties["상태"] || "",
      dueDate: row.properties["마감일"] || null,
      memo: row.properties["메모"] || "",
    })),
    budget,
    reports,
  };
}

async function main() {
  await loadEnvFile(join(ROOT_DIR, ".env"));
  await loadEnvFile("C:\\dev\\olchi-bridge\\.env");

  if (!process.env.NOTION_TOKEN) {
    throw new Error("Missing NOTION_TOKEN. Set it in the environment or the local bridge .env file.");
  }

  const config = await loadDashboardConfig();
  const rowsBySource = Object.fromEntries(
    await Promise.all(
      Object.entries(config.dataSources).map(async ([name, id]) => [name, await queryDataSource(id)])
    )
  );
  const snapshot = buildSnapshot(rowsBySource);

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

  console.log(
    JSON.stringify(
      {
        ok: true,
        output: OUTPUT_PATH,
        rowCounts: snapshot.source.rowCounts,
        generatedAt: snapshot.generatedAt,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
