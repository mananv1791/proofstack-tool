export const SESSION_COOKIE = "proofstack_tool_session";
export const LOCAL_FALLBACK_ACCESS_CODE = "proofstack-private-beta";

const encoder = new TextEncoder();

export function getAccessCode() {
  return process.env.TOOL_ACCESS_CODE || LOCAL_FALLBACK_ACCESS_CODE;
}

function getSessionSecret() {
  return process.env.TOOL_SESSION_SECRET || getAccessCode();
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken() {
  return sha256(`proofstack-tool:${getSessionSecret()}`);
}

export async function isValidSessionToken(token?: string) {
  if (!token) {
    return false;
  }

  return token === (await createSessionToken());
}
