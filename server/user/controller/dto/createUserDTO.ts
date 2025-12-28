import { z } from "zod";

export const createUserDto = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  role: z.enum(["patient", "client", "admin"]).optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
