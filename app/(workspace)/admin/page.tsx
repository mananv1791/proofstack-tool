import {
  Activity,
  BarChart3,
  CheckCircle2,
  FileSearch,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import {
  MetricCard,
  PageHeader,
  StatusPill,
  Surface,
  SurfaceTitle,
} from "@/components/tool-ui";

const queues = [
  ["Unsupported score", "Dossier cites weak transcript evidence", "ai_quality"],
  ["Private repo request", "Candidate needs GitHub App access later", "support"],
  ["Recruiter ghost risk", "No candidate reply after 14 days", "trust"],
  ["Artifact ownership", "Commit email mismatch needs review", "moderation"],
];

export default function AdminPage() {
  return (
    <>
      <PageHeader
        description="Internal operators monitor beta usage, AI quality, moderation, recruiter behavior, and the kill switches that keep the platform trustworthy."
        eyebrow="Admin operations"
        title="Operate the trust layer before scale."
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="grid gap-3 md:grid-cols-4">
          <MetricCard label="Interviews" meta="weekly completed" value="42" />
          <MetricCard label="Dossiers" meta="generated this week" value="38" />
          <MetricCard label="Flags" meta="open review queue" value="4" />
          <MetricCard label="Health" meta="system confidence" value="96%" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.78fr]">
          <Surface>
            <SurfaceTitle icon={ShieldCheck} title="Review queue" />
            <div className="divide-y divide-line">
              {queues.map(([title, detail, source]) => (
                <div key={title} className="grid gap-4 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="mt-1 text-sm text-slate">{detail}</p>
                  </div>
                  <StatusPill tone="warn">{source}</StatusPill>
                  <button className="h-9 border border-line px-3 text-sm font-semibold">Open</button>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="bg-ink text-white">
            <SurfaceTitle icon={LockKeyhole} title="Kill switches" />
            <div className="space-y-3 p-4">
              {[
                ["Artifact ingestion", "on"],
                ["Interview streaming", "off"],
                ["Dossier publishing", "on"],
                ["Recruiter messaging", "on"],
              ].map(([label, status]) => (
                <div key={label} className="flex items-center justify-between border border-white/10 bg-white/[0.03] p-3">
                  <span className="text-sm">{label}</span>
                  <StatusPill tone={status === "on" ? "ready" : "dark"}>{status}</StatusPill>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {[
            [BarChart3, "Funnel dashboard", "Candidate upload to dossier publish is the first private beta funnel."],
            [FileSearch, "AI quality sample", "Review scored interviews and mark unsupported citations."],
            [Activity, "Audit log", "Admin actions and impersonation require immutable records."],
          ].map(([Icon, title, detail]) => (
            <Surface key={String(title)}>
              <div className="p-5">
                <Icon className="mb-10 size-5 text-cobalt" />
                <h2 className="text-lg font-semibold">{String(title)}</h2>
                <p className="mt-2 text-sm leading-6 text-slate">{String(detail)}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-signal">
                  <CheckCircle2 className="size-4" />
                  beta ready shell
                </div>
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </>
  );
}
