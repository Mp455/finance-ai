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

    // <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
    //   <Sheet>
    //     <SheetTrigger asChild>
    //       <Button variant="outline" size="icon" className="lg:hidden">
    //         <MenuIcon className="h-6 w-6" />
    //         <span className="sr-only">Toggle navigation menu</span>
    //       </Button>
    //     </SheetTrigger>
    //     <SheetContent side="left">
    //       <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
    //         <MountainIcon className="h-6 w-6" />
    //         <span className="sr-only">Acme Inc</span>
    //       </Link>
    //       <div className="grid gap-2 py-6">
    //         <Link
    //           href="#"
    //           className="flex w-full items-center py-2 text-lg font-semibold"
    //           prefetch={false}
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex w-full items-center py-2 text-lg font-semibold"
    //           prefetch={false}
    //         >
    //           About
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex w-full items-center py-2 text-lg font-semibold"
    //           prefetch={false}
    //         >
    //           Services
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex w-full items-center py-2 text-lg font-semibold"
    //           prefetch={false}
    //         >
    //           Contact
    //         </Link>
    //       </div>
    //     </SheetContent>
    //   </Sheet>
    //   <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
    //     <MountainIcon className="h-6 w-6" />
    //     <span className="sr-only">Acme Inc</span>
    //   </Link>
    //   <nav className="ml-auto hidden gap-6 lg:flex">
    //     <Link
    //       href="#"
    //       className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
    //       prefetch={false}
    //     >
    //       Home
    //     </Link>
    //     <Link
    //       href="#"
    //       className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
    //       prefetch={false}
    //     >
    //       About
    //     </Link>
    //     <Link
    //       href="#"
    //       className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
    //       prefetch={false}
    //     >
    //       Services
    //     </Link>
    //     <Link
    //       href="#"
    //       className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
    //       prefetch={false}
    //     >
    //       Contact
    //     </Link>
    //   </nav>
    // </header>
  );
};

export default Navbar;
