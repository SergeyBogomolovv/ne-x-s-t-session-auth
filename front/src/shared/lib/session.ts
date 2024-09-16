import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function decryptToken(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey);
    return payload;
  } catch (error) {
    return null;
  }
}

import "server-only";
export function deleteSession() {
  cookies().delete("session");
}
