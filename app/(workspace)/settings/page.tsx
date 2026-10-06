import { Database, KeyRound, Server, ShieldCheck } from "lucide-react";
import {
  PageHeader,
  StatusPill,
  Surface,
  SurfaceTitle,
} from "@/components/tool-ui";

const envRows = [
  ["TOOL_ACCESS_CODE", "Private login wall", "required"],
  ["TOOL_SESSION_SECRET", "Cookie signing", "required"],
  ["NEXT_PUBLIC_APP_URL", "Deployment links", "recommended"],
  ["Supabase keys", "Future product auth and data", "next"],
  ["AI provider keys", "Future interview and dossier generation", "next"],
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        description="Deployment and integration readiness for the private ProofStack tool platform."
        eyebrow="Settings"
        title="Keep the beta platform private and ready to grow."
      />

      <div className="grid gap-6 p-5 sm:p-8 xl:grid-cols-[1fr_0.8fr]">
        <Surface>
          <SurfaceTitle icon={KeyRound} title="Environment readiness" />
          <div className="divide-y divide-line">
            {envRows.map(([name, purpose, status]) => (
              <div key={name} className="grid gap-3 p-4 md:grid-cols-[1fr_1fr_auto] md:items-center">
                <p className="font-mono text-xs text-cobalt">{name}</p>
                <p className="text-sm text-slate">{purpose}</p>
                <StatusPill tone={status === "required" ? "warn" : "neutral"}>{status}</StatusPill>
              </div>
            ))}
          </div>
        </Surface>

        <Surface>
          <SurfaceTitle icon={Server} title="Platform split" />
          <div className="space-y-3 p-4">
            {[
              ["Marketing", "Public Vercel project, public pages, waitlist."],
              ["Tool", "Separate Vercel project, login wall, product workspace."],
              ["Database", "Supabase product schema connects when keys are ready."],
            ].map(([title, detail]) => (
              <div key={title} className="border border-line bg-paper p-4">
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-5 text-slate">{detail}</p>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="xl:col-span-2">
          <SurfaceTitle icon={Database} title="Next integration sequence" />
          <div className="grid gap-px bg-line md:grid-cols-4">
            {[
              ["Supabase auth", "Replace access code with user accounts."],
              ["GitHub parser", "Read public repos and build artifact chunks."],
              ["AI interview", "Stream grounded questions from retrieved context."],
              ["Dossier share", "Generate public share URLs with candidate control."],
            ].map(([title, detail]) => (
              <div key={title} className="bg-panel p-4">
                <ShieldCheck className="mb-8 size-5 text-cobalt" />
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-5 text-slate">{detail}</p>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </>
  );
}
