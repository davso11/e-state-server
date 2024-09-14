import { z } from 'zod';

export const bookingSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  date: z.coerce.date(),
  message: z.string().nullish(),
});
