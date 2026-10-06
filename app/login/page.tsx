import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { LOCAL_FALLBACK_ACCESS_CODE } from "@/lib/session";
import { signInWithAccessCode } from "./actions";

export const metadata: Metadata = {
  title: "Private access | ProofStack Tool",
  description: "Sign in to the private ProofStack product workspace.",
};

type LoginPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const showLocalCode =
    process.env.NODE_ENV !== "production" && !process.env.TOOL_ACCESS_CODE;

  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <section className="flex min-h-[48rem] items-center border-white/10 px-6 py-10 lg:border-r lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-white/15 bg-white/8">
                <LockKeyhole className="size-4 text-brass" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                  ProofStack private beta
                </p>
                <h1 className="text-2xl font-semibold tracking-normal">
                  Product workspace
                </h1>
              </div>
            </div>

            <form action={signInWithAccessCode} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80" htmlFor="accessCode">
                  Access code
                </label>
                <div className="flex items-center border border-white/15 bg-white/8 px-3">
                  <KeyRound className="mr-2 size-4 text-white/45" />
                  <input
                    autoComplete="off"
                    autoFocus
                    className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                    id="accessCode"
                    name="accessCode"
                    placeholder="Enter code"
                    type="password"
                  />
                </div>
              </div>

              {searchParams?.error ? (
                <div className="border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-100">
                  {searchParams.error}
                </div>
              ) : null}

              {showLocalCode ? (
                <div className="border border-brass/40 bg-brass/10 px-3 py-2 font-mono text-xs text-brass">
                  Local code: {LOCAL_FALLBACK_ACCESS_CODE}
                </div>
              ) : null}

              <button
                className="flex h-12 w-full items-center justify-center gap-2 bg-cobalt px-4 text-sm font-semibold text-white transition hover:bg-cobalt/90"
                type="submit"
              >
                Enter workspace
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </section>

        <section className="proof-grid scanline hidden min-h-screen items-center bg-[#171a21] px-12 py-16 lg:flex">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/45">
              <ShieldCheck className="size-4 text-signal" />
              gated workspace
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {[
                ["Candidate intake", "GitHub artifact queue", "ready"],
                ["Interview engine", "Question plan state", "stubbed"],
                ["Dossier builder", "Evidence citations", "next"],
                ["Recruiter review", "Private beta access", "gated"],
              ].map(([title, detail, status]) => (
                <div key={title} className="border border-white/10 bg-black/20 p-5">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <FileSearch className="size-5 text-brass" />
                    <span className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase text-white/45">
                      {status}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="mt-2 text-sm text-white/55">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-white/10 bg-black/30 p-5">
              {["Public marketing stays separate", "All workspace routes require a session", "Production code is controlled by Vercel env vars"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/70 last:border-b-0">
                  <CheckCircle2 className="size-4 text-signal" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
