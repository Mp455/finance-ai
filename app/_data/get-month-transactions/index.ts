import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { startOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();

  const start = startOfMonth(new Date(Date.UTC(year, month)));
  const end = startOfMonth(new Date(Date.UTC(year, month + 1)));

  return await db.transaction.count({
    where: {
      userId,
      createdAt: {
        gte: start,
        lt: end,
      },
    },
  });
};
