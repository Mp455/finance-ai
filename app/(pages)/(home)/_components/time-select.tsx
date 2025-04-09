"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { MONTH_OPTIONS } from "@/app/_constants/month-options";
import { Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface TimeSelectProps {
  availableYears: number[];
}

const TimeSelect = ({ availableYears }: TimeSelectProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const month =
    searchParams.get("month") ||
    String(new Date().getMonth() + 1).padStart(2, "0");
  const year = searchParams.get("year") || String(new Date().getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const handleMonthChange = () => {
    push(`${pathname}?month=${selectedMonth}&year=${selectedYear}`);
  };

  const verifyRoute = pathname === "/";
  return (
    <>
      <Select
        value={selectedMonth}
        onValueChange={(value) => setSelectedMonth(value)}
        defaultValue={month ?? ""}
      >
        <SelectTrigger className="rounded-full sm:w-[150px]">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {MONTH_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={selectedYear}
        onValueChange={(value) => setSelectedYear(value)}
        defaultValue={year ?? ""}
      >
        <SelectTrigger className="rounded-full sm:w-[150px]">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {availableYears.map((year) => (
            <SelectItem key={year} value={String(year)}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        className={`rounded-full ${verifyRoute ? "hidden" : ""}`}
        onClick={() => push(pathname)}
      >
        Limpar Filtros
      </Button>

      <Button onClick={handleMonthChange} className="rounded-full">
        Filtrar
        <Filter />
      </Button>
    </>
  );
};

export default TimeSelect;
