"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

interface TimeSelectProps {
  availableYears: number[];
}

const TimeSelect = ({ availableYears }: TimeSelectProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const month =
    searchParams.get("month") ||
    String(new Date().getMonth() + 1).padStart(2, "0");
  const year = searchParams.get("year") || String(new Date().getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const handleMonthChange = () => {
    push(`/?month=${selectedMonth}&year=${selectedYear}`);
  };
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
        onClick={handleMonthChange}
        className="rounded-full"
        variant="outline"
      >
        Filtrar
      </Button>
    </>
  );
};

export default TimeSelect;
