import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  FileSearch,
  GitBranch,
  Search,
} from "lucide-react";
import {
  MetricCard,
  PageHeader,
  StatusPill,
  Surface,
  SurfaceTitle,
} from "@/components/tool-ui";

const buildLanes = [
  ["Artifact intake", "GitHub repo parser and status flow", "ready"],
  ["Interview engine", "Artifact-grounded chat with question plan", "build next"],
  ["Dossier builder", "Scores, evidence citations, share link", "queued"],
  ["Recruiter review", "Search, shortlist, messaging", "queued"],
];

const recentSignals = [
  ["repo.submitted", "candidate uploaded public GitHub URL", "candidate"],
  ["parser.ready", "README, tree, manifests, and top files indexed", "system"],
  ["question.plan", "architecture, failure modes, execution craft", "ai"],
  ["dossier.share", "private until candidate enables public link", "trust"],
];

export default function CommandPage() {
  return (
    <>
      <PageHeader
        action={
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 bg-cobalt px-4 text-sm font-semibold text-white transition hover:bg-cobalt/90"
            href="/candidate"
          >
            Open candidate flow
            <ArrowRight className="size-4" />
          </Link>
        }
        description="Private operating console for turning candidate artifacts into interviews, dossiers, recruiter review, and beta-ready product workflows."
        eyebrow="Command center"
        title="Build the tool behind the marketing site."
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="grid gap-3 md:grid-cols-4">
          <MetricCard label="Dossiers" meta="target for private beta" value="100" />
          <MetricCard label="Partners" meta="design partner companies" value="10" />
          <MetricCard label="Median parse" meta="target p50 artifact time" value="<60s" />
          <MetricCard label="Access" meta="private beta login gate" value="locked" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.78fr]">
          <Surface>
            <SurfaceTitle
              description="The first sellable vertical slice is candidate-first, then recruiter review."
              icon={ClipboardList}
              title="MVP build lanes"
            />
            <div className="divide-y divide-line">
              {buildLanes.map(([title, detail, status], index) => (
                <div key={title} className="grid gap-4 p-4 md:grid-cols-[2.5rem_1fr_auto] md:items-center">
                  <div className="flex size-9 items-center justify-center border border-line bg-paper font-mono text-xs text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-slate">{detail}</p>
                  </div>
                  <StatusPill tone={status === "ready" ? "ready" : status === "build next" ? "warn" : "neutral"}>
                    {status}
                  </StatusPill>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="bg-ink text-white">
            <SurfaceTitle
              description="A private wall is active before any workspace route renders."
              icon={FileSearch}
              title="Access boundary"
            />
            <div className="space-y-3 p-4">
              {[
                ["Session cookie", "HTTP-only, seven-day beta access"],
                ["Middleware", "Routes redirect to login without session"],
                ["Production env", "Code and signing secret stay in Vercel"],
              ].map(([title, detail]) => (
                <div key={title} className="border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{title}</h3>
                    <CheckCircle2 className="size-4 text-signal" />
                  </div>
                  <p className="mt-2 text-sm text-white/55">{detail}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <Surface className="xl:col-span-2">
            <SurfaceTitle icon={Database} title="Evidence pipeline" />
            <div className="grid gap-px bg-line md:grid-cols-4">
              {[
                [GitBranch, "Submit repo", "Validate URL and ownership signals"],
                [Code2, "Parse artifact", "Read README, tree, manifests, and files"],
                [Search, "Retrieve context", "Embed chunks for grounded questions"],
                [FileSearch, "Generate dossier", "Score only when evidence exists"],
              ].map(([Icon, title, detail]) => (
                <div key={String(title)} className="bg-panel p-4">
                  <Icon className="mb-8 size-5 text-cobalt" />
                  <h3 className="font-semibold">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-5 text-slate">{String(detail)}</p>
                </div>
              ))}
            </div>
          </Surface>

          <Surface>
            <SurfaceTitle icon={Activity} title="Event trace" />
            <div className="divide-y divide-line">
              {recentSignals.map(([event, detail, source]) => (
                <div key={event} className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs text-cobalt">{event}</p>
                    <StatusPill>{source}</StatusPill>
                  </div>
                  <p className="mt-2 text-sm text-slate">{detail}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </div>
    </>
  );
}
