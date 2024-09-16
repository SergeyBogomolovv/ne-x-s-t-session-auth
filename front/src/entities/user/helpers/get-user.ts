import { cache } from "react";
import { verifySession } from "@lib/dal";
import { UserModel } from "../model/user.model";
import { $api } from "@lib/http";
import { cookies } from "next/headers"; // для получения кук

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const sessionCookie = cookies().get("session");

    if (!sessionCookie) return null;

    const { data } = await $api.get("/users/me", {
      headers: {
        Cookie: `session=${sessionCookie?.value}`,
      },
    });

    const user = UserModel.parse(data);
    return user;
  } catch (error) {
    return null;
  }
});
