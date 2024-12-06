"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-8">
      {/* ESQUERDA */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              } flex w-full items-center py-2 text-lg font-semibold`}
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={`${
                pathname === "/transactions"
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              } flex w-full items-center py-2 text-lg font-semibold`}
            >
              Transações
            </Link>
            <Link
              href="/subscription"
              className={`${
                pathname === "/subscription"
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              } flex w-full items-center py-2 text-lg font-semibold`}
            >
              Assinaturas
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden items-center sm:flex sm:gap-10">
        <div className="flex items-center sm:gap-2">
          <Image src="/logo-icon.svg" width={27} height={26} alt="Finance AI" />
          <p className="hidden text-xl font-bold sm:inline">finance.ai</p>
        </div>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      {/* DIREITA */}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
