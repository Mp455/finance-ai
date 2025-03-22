import { DataTable } from "@/app/_components/ui/data-table";
import { db } from "@/app/_lib/prisma";

import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import Navbar from "@/app/_components/navbar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";

export const metadata = {
  title: "Transações",
};

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  const transaction = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={transactionsColumns}
            data={JSON.parse(JSON.stringify(transaction))}
          />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
