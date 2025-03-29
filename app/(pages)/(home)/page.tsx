import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import Navbar from "@/app/_components/navbar";
import { getDashboard } from "@/app/_data/get-dashboard";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { getAvailableYears } from "@/app/_data/get-available-years";

interface HomeProps {
  searchParams: {
    month: string;
    year: string;
  };
}

const Home = async ({ searchParams: { month, year } }: HomeProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  const currentYear = new Date().getFullYear();
  const selectedYear = year ? parseInt(year) : currentYear;

  if (monthIsInvalid) {
    const dateFormatted = String(new Date().getMonth() + 1).padStart(2, "0");
    redirect(`?month=${dateFormatted}&year=${currentYear}`);
  }
  const [dashboard, userCanAddTransaction, user, availableYears] =
    await Promise.all([
      getDashboard(month, selectedYear),
      canUserAddTransaction(),
      clerkClient().users.getUser(userId),
      getAvailableYears(),
    ]);

  return (
    <>
      <Navbar />
      <ScrollArea className="flex h-full flex-col space-y-6 sm:p-6 xl:overflow-hidden">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-1 sm:gap-3">
            <AiReportButton
              month={month}
              hasPremiumPlan={
                user.publicMetadata.subscriptionPlan === "premium"
              }
            />
            <TimeSelect availableYears={availableYears} />
          </div>
        </div>
        <div className="grid h-full gap-6 xl:grid-cols-[2fr,1fr] xl:overflow-hidden">
          <div className="flex flex-col gap-6 xl:overflow-hidden">
            <SummaryCards
              month={month}
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />
            <div className="grid h-full gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1 xl:overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
        <ScrollBar orientation="horizontal" className="hidden sm:inline" />
      </ScrollArea>
    </>
  );
};

export default Home;
