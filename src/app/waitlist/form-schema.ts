import { z } from "zod";

export const waitlistFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  token: z.string(),
});

export type WaitlistFormData = z.infer<typeof waitlistFormSchema>;