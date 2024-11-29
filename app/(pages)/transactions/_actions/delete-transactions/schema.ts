import { z } from "zod";

export const deleteTransactionsSchema = z.object({
  transactionId: z.string().uuid(),
});

export type DeleteTransactionSchema = z.infer<typeof deleteTransactionsSchema>;
