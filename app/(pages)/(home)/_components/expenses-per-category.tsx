import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";
import { ClipboardList } from "lucide-react";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}
const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <div className="h-full rounded-md border pb-6 xl:col-span-2">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por categoria</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[78%] pr-3">
        <CardContent className="h-full space-y-6 overflow-auto">
          {expensesPerCategory.length > 0 ? (
            expensesPerCategory.map((category) => (
              <div key={category.category} className="space-y-2">
                <div className="flex w-full justify-between">
                  <p className="text-sm font-bold">
                    {TRANSACTION_CATEGORY_LABELS[category.category]}
                  </p>

                  <p className="text-sm font-bold">
                    {category.percentageOfTotal}%
                  </p>
                </div>

                <Progress value={category.percentageOfTotal} />
              </div>
            ))
          ) : (
            <div className="flex h-[200px] items-center justify-center gap-2">
              <h2 className="text-xl text-[#71717A]">
                Sem gastos cadastrados neste mês.
              </h2>
              <ClipboardList size={16} color="#71717A" />
            </div>
          )}
        </CardContent>
      </ScrollArea>
    </div>
  );
};

export default ExpensesPerCategory;
