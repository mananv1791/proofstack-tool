"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSessionToken,
  getAccessCode,
  SESSION_COOKIE,
} from "@/lib/session";

function loginError(message: string): never {
  redirect(`/login?error=${encodeURIComponent(message)}`);
}

export async function signInWithAccessCode(formData: FormData) {
  const submittedCode = formData.get("accessCode")?.toString().trim();

  if (!submittedCode) {
    loginError("Enter the private beta access code.");
  }

  if (submittedCode !== getAccessCode()) {
    loginError("That access code is not valid.");
  }

  cookies().set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}
