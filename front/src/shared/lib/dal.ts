import "server-only";
import { cookies } from "next/headers";
import { decryptToken } from "@lib/session";
import { cache } from "react";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decryptToken(cookie);

  if (!session?.sub) {
    return null;
  }

  return { isAuth: true, userId: session.sub };
});
