import Link from "next/link";
import {
  Activity,
  Briefcase,
  FileSearch,
  Home,
  LogOut,
  Settings,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Command", icon: Home },
  { href: "/candidate", label: "Candidate", icon: UploadCloud },
  { href: "/recruiter", label: "Recruiter", icon: Briefcase },
  { href: "/admin", label: "Admin", icon: ShieldCheck },
  { href: "/settings", label: "Settings", icon: Settings },
];

type WorkspaceShellProps = {
  children: React.ReactNode;
  signOutAction: () => Promise<void>;
};

export function WorkspaceShell({ children, signOutAction }: WorkspaceShellProps) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="grid min-h-screen lg:grid-cols-[17rem_1fr]">
        <aside className="border-b border-line bg-ink text-white lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-4 px-4 py-4 lg:block lg:px-5 lg:py-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-white/15 bg-white/8">
                <FileSearch className="size-4 text-brass" />
              </span>
              <span>
                <span className="block text-sm font-semibold">ProofStack</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  tool beta
                </span>
              </span>
            </Link>
            <form action={signOutAction} className="lg:hidden">
              <button className="flex size-9 items-center justify-center border border-white/15 text-white/65" type="submit">
                <LogOut className="size-4" />
              </button>
            </form>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:block lg:space-y-1 lg:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-w-fit items-center gap-3 border border-white/10 px-3 py-2 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/8 hover:text-white lg:w-full"
              >
                <item.icon className="size-4 text-white/45" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden border-t border-white/10 p-4 lg:block">
            <div className="border border-white/10 bg-white/[0.03] p-3">
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                <Activity className="size-3.5 text-signal" />
                private gate
              </div>
              <p className="text-sm leading-5 text-white/62">
                This product app is separate from the public marketing site.
              </p>
            </div>
            <form action={signOutAction} className="mt-4">
              <button className="flex w-full items-center justify-center gap-2 border border-white/15 px-3 py-2 text-sm text-white/70 transition hover:bg-white/8" type="submit">
                <LogOut className="size-4" />
                Sign out
              </button>
            </form>
          </div>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
