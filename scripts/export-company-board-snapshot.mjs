import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_TEAMS_ROOT = resolve(ROOT_DIR, "..", "olchi-teams");
const TEAMS_ROOT = process.env.OLCHI_TEAMS_ROOT
  ? resolve(process.env.OLCHI_TEAMS_ROOT)
  : DEFAULT_TEAMS_ROOT;
const OUTPUT_PATH = resolve(ROOT_DIR, "public", "data", "company-board-snapshot.json");

function rel(path) {
  return resolve(TEAMS_ROOT, path);
}

async function readText(path, fallback = "") {
  const fullPath = rel(path);
  if (!existsSync(fullPath)) return fallback;
  return readFile(fullPath, "utf8");
}

async function readJson(path, fallback) {
  const content = await readText(path, "");
  if (!content.trim()) return fallback;
  return JSON.parse(content);
}

function runJson(command, args) {
  return new Promise((resolveOutput) => {
    execFile(
      command,
      args,
      {
        cwd: TEAMS_ROOT,
        env: { ...process.env, PYTHONIOENCODING: "utf-8" },
        windowsHide: true,
        timeout: 8000,
      },
      (error, stdout) => {
        if (error) {
          resolveOutput({ ok: false, error: error.message });
          return;
        }

        try {
          resolveOutput(JSON.parse(stdout));
        } catch (parseError) {
          resolveOutput({ ok: false, error: parseError.message });
        }
      }
    );
  });
}

function countBy(items, field) {
  const result = {};
  for (const item of items) {
    const key = item?.[field] ?? "unknown";
    result[key] = (result[key] || 0) + 1;
  }
  return result;
}

function parseRecentLog(markdown) {
  const rows = [];
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^###\s+(.+)$/);
    if (match) rows.push(match[1].trim());
  }
  return rows.slice(-10).reverse();
}

function activeBindingMap(bindings) {
  const map = new Map();
  for (const binding of bindings) {
    if (binding.status === "active" && !map.has(binding.seat_key)) {
      map.set(binding.seat_key, binding);
    }
  }
  return map;
}

function activeAssignmentMap(assignments) {
  const map = new Map();
  for (const assignment of assignments) {
    if (assignment.status === "active" && !map.has(assignment.seat_key)) {
      map.set(assignment.seat_key, assignment);
    }
  }
  return map;
}

function buildComponents(files) {
  return [
    {
      area: "지침",
      name: "Guideline Entrypoint v0",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "01_foundation/guideline-entrypoint-v0.md",
      next: "지침은 관찰 -> 기록 -> 반복 확인 -> 주간 검토 -> 승격으로 유지",
    },
    {
      area: "주체",
      name: "Actor Registry v0",
      status: "active draft",
      owner: "hr-lead",
      path: "02_registries/actor-registry.v0.json",
      next: "legacy actor 순차 등록 여부 판단",
    },
    {
      area: "주체",
      name: "Actor Persona Registry v0",
      status: files.actorPersona ? "active draft" : "missing",
      owner: "hr-lead + ops-planning-lead",
      path: "02_registries/actor-persona-registry.v0.json",
      next: "actor별 말투와 판단 습관을 권한/JobCard와 분리",
    },
    {
      area: "조직",
      name: "Seat Registry v0",
      status: "active draft",
      owner: "hr-lead",
      path: "02_registries/seat-registry.v0.json",
      next: "현재 assigned_actor_id는 Assignment projection으로 유지",
    },
    {
      area: "직위",
      name: "Position Covenant Registry v0",
      status: files.positionCovenant ? "active draft" : "missing",
      owner: "hr-lead",
      path: "02_registries/position-covenant-registry.v0.json",
      next: "팀장급 위임, 직접 실행 예외, runtime onboarding 상태 기준",
    },
    {
      area: "배치",
      name: "Assignment Registry v0",
      status: files.assignment ? "active draft" : "missing",
      owner: "hr-lead",
      path: "02_registries/assignment-registry.v0.json",
      next: "대행, 겸직, handoff 기준 v0.1 후보",
    },
    {
      area: "직무",
      name: "JobCard Registry v0",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "02_registries/job-card-registry.v0.json",
      next: "thin registry에서 필요한 full JobCard만 선별",
    },
    {
      area: "소통",
      name: "Gyosimun Schema v0.2",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "03_communication/gyosimun-message.schema.v0.2.json",
      next: "delivery_policy와 response_policy 실제 운영 보강",
    },
    {
      area: "전달",
      name: "Push Dispatcher v0",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "03_communication/push-dispatcher-v0.md",
      next: "신규 교신문 direct payload 정상 경로 유지",
    },
    {
      area: "복구",
      name: "Wake Dispatcher v0",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "03_communication/wake-dispatcher-v0.md",
      next: "10분 이상 ack=false 복구 전용",
    },
    {
      area: "런타임",
      name: "Runtime Adapter v0",
      status: "active draft",
      owner: "hr-lead + ops-planning-lead",
      path: "04_runtime/runtime-adapter-v0.md",
      next: "runtime-builder handoff 조건 확인",
    },
    {
      area: "작업",
      name: "WorkBoard v0",
      status: "active draft",
      owner: "hr-lead",
      path: "05_workboard/workboard.v0.json",
      next: "작업 원장과 Development Board 역할 분리 유지",
    },
    {
      area: "화면",
      name: "Clean Rebuild Board v0",
      status: "active draft",
      owner: "hr-lead",
      path: "06_dashboard/clean-rebuild-board-v0.md",
      next: "53240에서 read-only 상태 확인",
    },
    {
      area: "디자인",
      name: "UI Design Reference v0",
      status: files.design ? "active draft" : "missing",
      owner: "hr-lead",
      path: "DESIGN.md",
      next: "Notion 계열 문서형 운영 UI 기준으로 화면 polish",
    },
    {
      area: "디자인",
      name: "Design Reference Index v0",
      status: files.designIndex ? "active draft" : "missing",
      owner: "hr-lead",
      path: "06_dashboard/design-reference-index-v0.md",
      next: "후속 UI 작업 후보 A/B/C 선택 기준",
    },
  ];
}

async function buildSnapshot() {
  const [
    actorRegistry,
    seatRegistry,
    assignmentRegistry,
    jobRegistry,
    runtimeBindings,
    positionCovenants,
    workboard,
    currentLog,
    commStatus,
  ] = await Promise.all([
    readJson("02_registries/actor-registry.v0.json", { actors: [] }),
    readJson("02_registries/seat-registry.v0.json", { seats: [] }),
    readJson("02_registries/assignment-registry.v0.json", { assignments: [] }),
    readJson("02_registries/job-card-registry.v0.json", { job_cards: [] }),
    readJson("02_registries/runtime-bindings.v0.json", { bindings: [] }),
    readJson("02_registries/position-covenant-registry.v0.json", { covenants: [] }),
    readJson("05_workboard/workboard.v0.json", { work_items: [], events: [] }),
    readText("00_start_here/current-log.md", ""),
    runJson("python", ["scripts\\olchi-comm.py", "status"]),
  ]);

  const actors = Array.isArray(actorRegistry.actors) ? actorRegistry.actors : [];
  const seats = Array.isArray(seatRegistry.seats) ? seatRegistry.seats : [];
  const assignments = Array.isArray(assignmentRegistry.assignments)
    ? assignmentRegistry.assignments
    : [];
  const jobs = Array.isArray(jobRegistry.job_cards) ? jobRegistry.job_cards : [];
  const bindings = Array.isArray(runtimeBindings.bindings) ? runtimeBindings.bindings : [];
  const covenants = Array.isArray(positionCovenants.covenants)
    ? positionCovenants.covenants
    : [];
  const workItems = Array.isArray(workboard.work_items) ? workboard.work_items : [];

  const actorById = new Map(actors.map((actor) => [actor.actor_id, actor]));
  const jobById = new Map(jobs.map((job) => [job.job_card_id, job]));
  const covenantByPosition = new Map(
    covenants.map((covenant) => [covenant.position_key, covenant])
  );
  const activeAssignments = activeAssignmentMap(assignments);
  const activeBindings = activeBindingMap(bindings);

  const seatRows = seats.map((seat) => {
    const assignment = activeAssignments.get(seat.seat_key) || null;
    const binding = activeBindings.get(seat.seat_key) || null;
    const actor = actorById.get(seat.assigned_actor_id) || null;
    const job = jobById.get(seat.job_card_id) || null;

    return {
      seat_id: seat.seat_id,
      seat_key: seat.seat_key,
      seat_name: seat.seat_name,
      seat_type: seat.seat_type,
      position_key: seat.position_key || null,
      position_covenant_id: covenantByPosition.get(seat.position_key)?.covenant_id || null,
      seat_path: seat.seat_path,
      reports_to_seat_id: seat.reports_to_seat_id,
      seat_status: seat.status,
      assigned_actor_id: seat.assigned_actor_id,
      actor_name: actor?.display_name || null,
      assignment_status: assignment?.status || null,
      actor_registry_status: assignment?.actor_registry_status || null,
      runtime_status: binding?.status || null,
      runtime_kind: binding?.runtime_kind || null,
      target_thread_id: binding?.target_thread_id || null,
      job_card_id: seat.job_card_id,
      job_status: job?.status || null,
      notes: seat.notes || "",
    };
  });

  const wakeRows = Array.isArray(commStatus.wake_queue) ? commStatus.wake_queue : [];
  const inboxRows = Array.isArray(commStatus.inbox) ? commStatus.inbox : [];
  const unacked = inboxRows
    .filter((row) => row.ack === 0 || row.ack === false)
    .reduce((sum, row) => sum + Number(row.count || 0), 0);

  return {
    version: 1,
    generated_at: new Date().toISOString(),
    repo_root: TEAMS_ROOT,
    source: {
      type: "olchi-teams-company-board-snapshot",
      board_port: 53240,
      route_source: "scripts/olchi-clean-rebuild-board.mjs",
    },
    metrics: {
      actors: actors.length,
      seats: seats.length,
      assigned_seats: seats.filter(
        (seat) => seat.assigned_actor_id && seat.assigned_actor_id !== "none"
      ).length,
      active_assignments: assignments.filter((item) => item.status === "active").length,
      pending_actor_registration: assignments.filter(
        (item) =>
          item.status === "active" &&
          item.actor_registry_status === "pending_actor_registration"
      ).length,
      active_runtime_bindings: bindings.filter((item) => item.status === "active").length,
      position_covenants: covenants.length,
      job_cards: jobs.length,
      work_items: workItems.length,
      work_done: workItems.filter((item) => item.status === "done").length,
      work_waiting: workItems.filter(
        (item) => item.status === "waiting_reply" || item.status === "waiting_runtime"
      ).length,
      unacked_messages: unacked,
      active_wakes: wakeRows.filter((item) => item.active_automation_id).length,
    },
    status_counts: {
      actors: countBy(actors, "status"),
      seats: countBy(seats, "status"),
      assignments: countBy(assignments, "status"),
      work: countBy(workItems, "status"),
    },
    components: buildComponents({
      actorPersona: existsSync(rel("02_registries/actor-persona-registry.v0.json")),
      assignment: existsSync(rel("02_registries/assignment-registry.v0.json")),
      positionCovenant: existsSync(rel("02_registries/position-covenant-registry.v0.json")),
      design: existsSync(rel("DESIGN.md")),
      designIndex: existsSync(rel("06_dashboard/design-reference-index-v0.md")),
    }),
    work_items: workItems
      .slice()
      .sort((a, b) => String(b.updated_at || b.created_at).localeCompare(String(a.updated_at || a.created_at)))
      .slice(0, 12),
    seats: seatRows,
    communication: {
      ok: commStatus.ok === true,
      inbox: inboxRows,
      wake_queue: wakeRows,
    },
    recent_log: parseRecentLog(currentLog),
  };
}

async function main() {
  if (!existsSync(TEAMS_ROOT)) {
    throw new Error(`Olchi Teams root not found: ${TEAMS_ROOT}`);
  }

  const snapshot = await buildSnapshot();
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

  console.log(
    JSON.stringify(
      {
        ok: true,
        output: OUTPUT_PATH,
        metrics: snapshot.metrics,
        generated_at: snapshot.generated_at,
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
