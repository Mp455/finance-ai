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
import { ScrollArea } from "@/app/_components/ui/scroll-area";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }
  const dashboard = await getDashboard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  const user = await clerkClient().users.getUser(userId);

  return (
    <>
      <Navbar />
      <ScrollArea>
        <div className="flex h-full flex-col space-y-6 pt-3 sm:p-6">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-3">
              <AiReportButton
                month={month}
                hasPremiumPlan={
                  user.publicMetadata.subscriptionPlan === "premium"
                }
              />
              <TimeSelect />
            </div>
          </div>
          <div className="grid h-full grid-cols-1 sm:gap-6 sm:overflow-hidden md:grid-cols-[2fr,1fr] xs:gap-3">
            <div className="flex flex-col gap-6 overflow-hidden">
              <SummaryCards
                month={month}
                {...dashboard}
                userCanAddTransaction={userCanAddTransaction}
              />
              <div className="grid grid-cols-1 gap-6 sm:h-full sm:grid-cols-1 sm:overflow-hidden xl:grid-cols-3 xl:grid-rows-1">
                <TransactionsPieChart {...dashboard} />
                <ExpensesPerCategory
                  expensesPerCategory={dashboard.totalExpensePerCategory}
                />
              </div>
            </div>

            <LastTransactions lastTransactions={dashboard.lastTransactions} />
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default Home;
