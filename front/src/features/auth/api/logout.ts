import { $api } from "@/shared/lib/http";

export const logout = async () => {
  await $api.post("/auth/logout");
};
