import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import { History } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}
const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.EXPENSE) {
      return "text-danger";
    }
    if (transaction.type === TransactionType.DEPOSIT) {
      return "text-primary";
    }
    return "text-white";
  };
  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) {
      return "+";
    }

    return "-";
  };
  return (
    <div className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas transações</CardTitle>
        <Button variant="outline" className="rounded-full" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <ScrollArea className="h-[82%] pr-3">
        <CardContent className="h-full space-y-6 overflow-auto">
          {lastTransactions.length > 0 ? (
            lastTransactions.map((transaction) => (
              <div
                className="flex items-center justify-between"
                key={transaction.id}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white bg-opacity-[3%] p-3">
                    <Image
                      src={
                        TRANSACTION_PAYMENT_METHOD_ICONS[
                          transaction.paymentMethod
                        ]
                      }
                      width={20}
                      height={20}
                      className="h-5 w-5"
                      alt="PIX"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold">{transaction.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm font-bold ${getAmountColor(transaction)}`}
                >
                  {getAmountPrefix(transaction)}
                  {formatCurrency(Number(transaction.amount))}
                </p>
              </div>
            ))
          ) : (
            <div className="flex h-[300px] items-center justify-center gap-2">
              <h2 className="text-xl text-[#71717A]">
                Você não possui nenhuma transação cadastrada neste mês.
              </h2>
              <History size={16} color="#71717A" />
            </div>
          )}
        </CardContent>
      </ScrollArea>
    </div>
  );
};

export default LastTransactions;
