import { $api } from "@/shared/lib/http";
import { AuthResponse, ResponseSchema } from "../model/response.schema";
import { RegisterFields } from "../model/register.schema";

export const register = async (data: RegisterFields) => {
  try {
    const { data: res } = await $api.post<AuthResponse>("/auth/register", data);

    const { message } = ResponseSchema.parse(res);

    return message;
  } catch (error) {
    throw error;
  }
};
