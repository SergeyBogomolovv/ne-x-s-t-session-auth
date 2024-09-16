import { z } from "zod";

export const ResponseSchema = z.object({
  message: z.string(),
});

export type AuthResponse = z.infer<typeof ResponseSchema>;
