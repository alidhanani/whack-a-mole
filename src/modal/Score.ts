import { z } from 'zod';

export const Score = z.object({
  name: z.string(),
  value: z.number(),
});

export type Score = z.infer<typeof Score>;
