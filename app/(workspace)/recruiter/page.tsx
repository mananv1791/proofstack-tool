import {
  ArrowRight,
  Briefcase,
  Building2,
  FileSearch,
  Inbox,
  Search,
  Users,
} from "lucide-react";
import {
  MetricCard,
  PageHeader,
  PrimaryButton,
  StatusPill,
  Surface,
  SurfaceTitle,
} from "@/components/tool-ui";

const candidates = [
  ["Priya Raman", "Senior full-stack", "87", "Next.js, Supabase, realtime"],
  ["Owen Chen", "Platform engineer", "84", "Queues, Postgres, observability"],
  ["Maya Ivers", "Product engineer", "81", "Design systems, payments, UX"],
];

const stages = [
  ["reviewing", "12"],
  ["contacted", "4"],
  ["interviewing", "2"],
  ["offer", "1"],
  ["hired", "0"],
];

export default function RecruiterPage() {
  return (
    <>
      <PageHeader
        action={
          <PrimaryButton>
            Create role
            <ArrowRight className="size-4" />
          </PrimaryButton>
        }
        description="Recruiters review evidence packets, build shortlists, and message candidates without getting direct contact details before consent."
        eyebrow="Recruiter workspace"
        title="Search dossiers instead of sorting resumes."
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="grid gap-3 md:grid-cols-4">
          <MetricCard label="Open roles" meta="private beta company" value="3" />
          <MetricCard label="Matched dossiers" meta="visible candidates" value="24" />
          <MetricCard label="Free previews" meta="before billing wall" value="3" />
          <MetricCard label="Messages" meta="candidate consent-first" value="9" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <Surface>
            <SurfaceTitle icon={Building2} title="Role setup" />
            <div className="space-y-3 p-4">
              {[
                ["Title", "Senior full-stack engineer"],
                ["Seniority", "senior"],
                ["Stack", "Next.js, TypeScript, Postgres"],
                ["Salary", "$160k-$220k"],
              ].map(([label, value]) => (
                <div key={label} className="border border-line bg-paper p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
              <div className="border border-line bg-panel p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cobalt">
                  ideal candidate prompt
                </p>
                <p className="mt-2 text-sm leading-5 text-slate">
                  Has built a production realtime workflow with clear failure handling,
                  tenant isolation, and operational trade-offs.
                </p>
              </div>
            </div>
          </Surface>

          <Surface>
            <SurfaceTitle icon={Search} title="Candidate search" />
            <div className="divide-y divide-line">
              {candidates.map(([name, role, score, detail]) => (
                <div key={name} className="grid gap-4 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                  <div>
                    <h2 className="font-semibold">{name}</h2>
                    <p className="mt-1 text-sm text-slate">{role}</p>
                    <p className="mt-2 text-sm text-slate">{detail}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate">score</p>
                    <p className="text-2xl font-semibold text-cobalt">{score}</p>
                  </div>
                  <button className="inline-flex h-9 items-center justify-center gap-2 border border-line px-3 text-sm font-semibold">
                    Review
                    <FileSearch className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
          <Surface>
            <SurfaceTitle icon={Briefcase} title="Shortlist pipeline" />
            <div className="grid gap-px bg-line md:grid-cols-5">
              {stages.map(([stage, count]) => (
                <div key={stage} className="min-h-36 bg-panel p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">{stage}</p>
                    <StatusPill>{count}</StatusPill>
                  </div>
                  <div className="mt-5 border border-line bg-paper p-3 text-sm">
                    Evidence review packet
                  </div>
                </div>
              ))}
            </div>
          </Surface>

          <Surface>
            <SurfaceTitle icon={Inbox} title="Message policy" />
            <div className="space-y-3 p-4">
              {[
                "Candidate email stays hidden until consent.",
                "Messages attach role context automatically.",
                "Recruiter health tracks reply behavior.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-line bg-paper p-3 text-sm">
                  <Users className="size-4 text-cobalt" />
                  {item}
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </div>
    </>
  );
}
