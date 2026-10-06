import { WorkspaceShell } from "@/components/workspace-shell";
import { signOut } from "./actions";

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WorkspaceShell signOutAction={signOut}>{children}</WorkspaceShell>;
}
