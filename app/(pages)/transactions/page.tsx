import { DataTable } from "@/app/_components/ui/data-table";
import { db } from "@/app/_lib/prisma";

import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import Navbar from "@/app/_components/navbar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import { getAvailableYears } from "@/app/_data/get-available-years";
import { isMatch } from "date-fns";
import TimeSelect from "../(home)/_components/time-select";

export const metadata = {
  title: "Transações",
};

interface TransactionsPageProps {
  searchParams: {
    month: string;
    year: string;
  };
}

const TransactionsPage = async ({
  searchParams: { month, year },
}: TransactionsPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }
  const currentYear = new Date().getFullYear();
  const selectedYear = year ? parseInt(year) : currentYear;

  const applyFilter = month && year && isMatch(month, "MM");
  const startDate = applyFilter
    ? new Date(`${selectedYear}-${month}-01`)
    : undefined;

  const endDate = applyFilter
    ? new Date(selectedYear, parseInt(month), 0)
    : undefined;

  const whereClause = {
    userId,
    ...(applyFilter && {
      date: {
        gte: startDate,
        lte: endDate,
      },
    }),
  };

  const [transaction, userCanAddTransaction, availableYears] =
    await Promise.all([
      db.transaction.findMany({
        where: whereClause,
        orderBy: {
          date: "desc",
        },
      }),
      canUserAddTransaction(),
      getAvailableYears(),
    ]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <div className="grid w-full grid-cols-3 items-center justify-center sm:flex sm:grid-cols-none sm:gap-3 md:justify-end">
          <TimeSelect availableYears={availableYears} />
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
