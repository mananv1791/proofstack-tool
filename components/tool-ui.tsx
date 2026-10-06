import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-panel px-5 py-6 sm:px-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cobalt">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
            {description}
          </p>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  );
}

export function Surface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("border border-line bg-panel", className)}>{children}</section>;
}

export function SurfaceTitle({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line p-4">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {description ? <p className="mt-1 text-sm leading-5 text-slate">{description}</p> : null}
      </div>
      {Icon ? (
        <span className="flex size-8 items-center justify-center border border-line bg-paper text-cobalt">
          <Icon className="size-4" />
        </span>
      ) : null}
    </div>
  );
}

export function StatusPill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "ready" | "warn" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center border px-2 font-mono text-[10px] uppercase tracking-[0.12em]",
        tone === "ready" && "border-signal/30 bg-signal/10 text-signal",
        tone === "warn" && "border-brass/40 bg-brass/10 text-brass",
        tone === "dark" && "border-white/12 bg-white/8 text-white/60",
        tone === "neutral" && "border-line bg-paper text-slate",
      )}
    >
      {children}
    </span>
  );
}

export function MetricCard({
  label,
  value,
  meta,
}: {
  label: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="border border-line bg-panel p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate">{label}</p>
      <p className="mt-3 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-slate">{meta}</p>
    </div>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-10 items-center justify-center gap-2 bg-cobalt px-4 text-sm font-semibold text-white transition hover:bg-cobalt/90">
      {children}
    </button>
  );
}
