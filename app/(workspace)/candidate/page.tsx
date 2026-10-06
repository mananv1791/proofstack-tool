import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileSearch,
  GitBranch,
  MessageSquare,
  UploadCloud,
} from "lucide-react";
import {
  MetricCard,
  PageHeader,
  PrimaryButton,
  StatusPill,
  Surface,
  SurfaceTitle,
} from "@/components/tool-ui";

const steps = [
  ["Profile", "Target role, seniority, location, remote preference", "ready"],
  ["Artifact", "Public GitHub repo URL", "active"],
  ["Interview", "Artifact-grounded question plan", "next"],
  ["Dossier", "Evidence-backed score packet", "next"],
];

const dossierRows = [
  ["System architecture", "91", "trade-off reasoning"],
  ["Edge cases", "82", "failure paths named"],
  ["Execution craft", "88", "tests and boundaries"],
  ["Product sense", "86", "prioritized usability"],
];

export default function CandidatePage() {
  return (
    <>
      <PageHeader
        action={
          <PrimaryButton>
            Start artifact intake
            <ArrowRight className="size-4" />
          </PrimaryButton>
        }
        description="The candidate side starts from one real artifact, creates a grounded interview, and packages the result into a portable dossier."
        eyebrow="Candidate workspace"
        title="Upload work. Prove ownership. Generate the dossier."
      />

      <div className="space-y-6 p-5 sm:p-8">
        <div className="grid gap-3 md:grid-cols-4">
          {steps.map(([label, meta, status]) => (
            <MetricCard key={label} label={label} meta={meta} value={status} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.78fr_1fr]">
          <Surface>
            <SurfaceTitle
              description="MVP starts with public repos before private GitHub App access."
              icon={UploadCloud}
              title="Artifact intake"
            />
            <div className="space-y-4 p-4">
              <div>
                <label className="text-sm font-medium" htmlFor="repo">
                  GitHub repo URL
                </label>
                <div className="mt-2 flex items-center border border-line bg-paper px-3">
                  <GitBranch className="mr-2 size-4 text-slate" />
                  <input
                    className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate/50"
                    id="repo"
                    placeholder="https://github.com/you/project"
                  />
                </div>
              </div>
              <button className="flex h-10 w-full items-center justify-center gap-2 bg-ink px-4 text-sm font-semibold text-white">
                Queue parser
                <ArrowRight className="size-4" />
              </button>
              <div className="border border-line bg-panel">
                {[
                  ["Repo reachable", "ready"],
                  ["README parsed", "ready"],
                  ["Top files chunked", "queued"],
                  ["Embeddings stored", "queued"],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between border-b border-line px-3 py-2 last:border-b-0">
                    <span className="text-sm">{label}</span>
                    <StatusPill tone={status === "ready" ? "ready" : "neutral"}>{status}</StatusPill>
                  </div>
                ))}
              </div>
            </div>
          </Surface>

          <Surface>
            <SurfaceTitle icon={MessageSquare} title="Interview room preview" />
            <div className="grid gap-px bg-line md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-panel p-4">
                <div className="mb-4 flex items-center justify-between">
                  <StatusPill tone="warn">artifact context</StatusPill>
                  <Code2 className="size-4 text-cobalt" />
                </div>
                <pre className="overflow-hidden whitespace-pre-wrap border border-line bg-paper p-3 font-mono text-xs leading-5 text-slate">
{`/app/api/chat/route.ts
/lib/supabase/server.ts
/components/message-list.tsx

signals:
- optimistic render
- reconnect path
- RLS boundary`}
                </pre>
              </div>
              <div className="bg-panel p-4">
                <div className="border border-line bg-paper p-4">
                  <p className="font-mono text-xs uppercase text-cobalt">interview question</p>
                  <p className="mt-3 text-lg font-semibold">
                    Your realtime message flow uses optimistic inserts. What breaks when the insert fails after the UI already rendered it?
                  </p>
                </div>
                <div className="mt-4 grid gap-2">
                  {["Ask one grounded question", "Persist transcript turn", "Update topic coverage"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate">
                      <CheckCircle2 className="size-4 text-signal" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Surface>
        </div>

        <Surface>
          <SurfaceTitle icon={FileSearch} title="Dossier preview" />
          <div className="grid gap-px bg-line md:grid-cols-[0.7fr_1.3fr]">
            <div className="bg-ink p-5 text-white">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-brass">overall score</p>
              <p className="mt-4 text-6xl font-semibold">87</p>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Every score requires transcript or artifact evidence before it can ship.
              </p>
            </div>
            <div className="grid gap-px bg-line md:grid-cols-4">
              {dossierRows.map(([label, score, detail]) => (
                <div key={label} className="bg-panel p-4">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="mt-4 text-3xl font-semibold text-cobalt">{score}</p>
                  <p className="mt-2 text-sm text-slate">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Surface>
      </div>
    </>
  );
}
