import { $api } from "@/shared/lib/http";
import { LoginFields } from "../model/login.schema";
import { AuthResponse, ResponseSchema } from "../model/response.schema";

export const login = async (data: LoginFields) => {
  try {
    const { data: res } = await $api.post<AuthResponse>("/auth/login", data);

    const { message } = ResponseSchema.parse(res);

    return message;
  } catch (error) {
    throw error;
  }
};
