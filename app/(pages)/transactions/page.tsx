import { DataTable } from "@/app/_components/ui/data-table";
import { db } from "@/app/_lib/prisma";

import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";

const TransactionsPage = async () => {
  const transaction = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionsColumns} data={transaction} />
    </div>
  );
};

export default TransactionsPage;
