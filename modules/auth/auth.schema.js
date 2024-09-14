import { z } from 'zod';

export const newUserSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(),
});

export const loginSchema = newUserSchema.pick({ email: true, password: true });
