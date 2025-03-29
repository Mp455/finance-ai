import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getAvailableYears = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    select: {
      date: true,
    },
    distinct: ["date"],
  });

  const uniqueYears = new Set<number>();
  transactions.forEach((transaction) => {
    uniqueYears.add(new Date(transaction.date).getFullYear());
  });

  const currentYear = new Date().getFullYear();
  uniqueYears.add(currentYear);

  return Array.from(uniqueYears).sort((a, b) => b - a);
};
