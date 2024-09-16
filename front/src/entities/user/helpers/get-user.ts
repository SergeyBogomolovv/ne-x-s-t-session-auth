import { cache } from "react";
import { verifySession } from "@lib/dal";
import { UserModel } from "../model/user.model";
import { $api } from "@lib/http";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const { data } = await $api.get("/users/me");

    const user = UserModel.parse(data);

    return user;
  } catch (error) {
    return null;
  }
});
