import { z } from "zod";

export const Loginschema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFields = z.infer<typeof Loginschema>;
