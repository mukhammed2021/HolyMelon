"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MenuIcon, Moon, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   Dialog,
   DialogTrigger,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Search from "./Search";

interface NavMenuProps {
   isMenuOpen: boolean;
}

const cities = [
   "Алматы",
   "Астана (Нур-Султан)",
   "Усть-Каменогорск (Öskemen)",
   "Атырау",
   "Шымкент",
   "Баку (Азербайджан)",
];

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      function handleOpen() {
         if (window.outerWidth >= 1280) setIsMenuOpen(false);
      }
      window.addEventListener("resize", handleOpen);
      return () => {
         window.removeEventListener("resize", handleOpen);
      };
   }, []);

   return (
      <header className="fixed left-0 top-0 z-10 w-full bg-white">
         <div className="container flex min-h-[6.25rem] items-center justify-between gap-x-4">
            <div className="flex items-center gap-x-3 md:gap-x-5 lg:gap-x-8 xl:flex-1 xl:gap-x-12">
               <Logo />
               <Separator
                  orientation="vertical"
                  className="z-[2] hidden h-[1.875rem] sm:block"
               />
               <Dialog>
                  <DialogTrigger className="z-[2] hidden items-center font-bold uppercase sm:flex">
                     Астана <ChevronDown />
                  </DialogTrigger>
                  <DialogContent className="max-h-screen overflow-auto xl:max-w-[71.25rem] xl:rounded-[2.5rem] xl:px-[5.9375rem] xl:py-[5.625rem]">
                     <DialogHeader className="mb-6 flex-row items-center justify-between md:mb-9 lg:mb-[4.6875rem]">
                        <DialogTitle className="font-normal uppercase lg:text-[2rem]">
                           выбрать город
                        </DialogTitle>
                        <DialogClose>
                           <X size={50} />
                        </DialogClose>
                     </DialogHeader>
                     <div className="relative">
                        <SearchIcon
                           size={30}
                           className="absolute left-0 top-1/2 -translate-y-1/2"
                        />
                        <Input
                           placeholder="Поиск"
                           className="border-none pl-[2.625rem] placeholder:text-[#c6c6c6]/[.63] lg:text-[2rem]"
                        />
                     </div>
                     <Separator className="mb-6 mt-[.375rem] lg:mb-[4.75rem]" />
                     <ul className="space-y-9 leading-none text-black/[.53] lg:space-y-[3.625rem] lg:text-[2rem]">
                        {cities.map((city) => (
                           <li key={city}>
                              <button type="button">{city}</button>
                           </li>
                        ))}
                     </ul>
                  </DialogContent>
               </Dialog>
            </div>
            <NavMenu isMenuOpen={isMenuOpen} />
            <div className="z-[2] flex items-center justify-end gap-x-[1.875rem] xl:flex-1">
               <DropdownMenu>
                  <DropdownMenuTrigger className="hidden font-bold uppercase xl:flex xl:items-center">
                     о нас <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-[1.375rem] p-0">
                     <DropdownMenuItem className="px-[1.375rem] py-4">
                        <Link
                           href="/staff"
                           className="text-[1.375rem] font-bold uppercase"
                        >
                           сотрудники
                        </Link>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
               <div className="flex items-center gap-4">
                  <Search />
                  <Button
                     variant="icon"
                     size="icon"
                     className="bg-[#010e2a]/[.92] max-[375px]:size-10 max-[375px]:rounded-2xl"
                  >
                     <Moon className="text-white" />
                  </Button>
                  <button
                     type="button"
                     onClick={() => setIsMenuOpen((open) => !open)}
                     className="max-[375px]:size-10 xl:hidden"
                  >
                     {isMenuOpen ? (
                        <X size={50} className="max-[375px]:size-10" />
                     ) : (
                        <MenuIcon size={50} className="max-[375px]:size-10" />
                     )}
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}

function Logo() {
   return (
      <Link href="/" className="z-[2]">
         <Image src="/logo.png" width={120} height={74} alt="логотип" />
      </Link>
   );
}

function NavMenu({ isMenuOpen }: NavMenuProps) {
   return (
      <nav
         className={cn("hidden xl:block", {
            "fixed left-0 top-0 block h-full w-full overflow-auto bg-white px-4 pb-4 pt-[6.25rem] before:fixed before:left-0 before:top-0 before:h-[6.25rem] before:w-full before:bg-white":
               isMenuOpen,
         })}
      >
         <ul
            className={cn(
               "flex items-center gap-x-[2.9375rem] font-bold uppercase",
               {
                  "flex-col gap-y-8": isMenuOpen,
               },
            )}
         >
            <li>
               <Link href="/brands">бренды</Link>
            </li>
            <li>
               <Link href="/reports">Фото и видео</Link>
            </li>
            <li>
               <Link href="/anonces">анонсы</Link>
            </li>
            <li className="block xl:hidden">
               <DropdownMenu>
                  <DropdownMenuTrigger className="flex font-bold uppercase xl:items-center">
                     о нас <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-[1.375rem] p-0">
                     <DropdownMenuItem className="px-[1.375rem] py-4">
                        <Link
                           href="/staff"
                           className="text-[1.375rem] font-bold uppercase"
                        >
                           сотрудники
                        </Link>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </li>
            <li className="block sm:hidden">
               <Dialog>
                  <DialogTrigger className="z-[2] flex items-center font-bold uppercase">
                     Астана <ChevronDown />
                  </DialogTrigger>
                  <DialogContent className="max-h-screen overflow-auto xl:max-w-[71.25rem] xl:rounded-[2.5rem] xl:px-[5.9375rem] xl:py-[5.625rem]">
                     <DialogHeader className="mb-[4.6875rem] flex-row items-center justify-between">
                        <DialogTitle className="font-normal uppercase lg:text-[2rem]">
                           выбрать город
                        </DialogTitle>
                        <DialogClose>
                           <X size={50} />
                        </DialogClose>
                     </DialogHeader>
                     <div className="relative">
                        <SearchIcon
                           size={30}
                           className="absolute left-0 top-1/2 -translate-y-1/2"
                        />
                        <Input
                           placeholder="Поиск"
                           className="border-none pl-[2.625rem] placeholder:text-[#c6c6c6]/[.63] lg:text-[2rem]"
                        />
                     </div>
                     <Separator className="mb-[4.75rem] mt-[.375rem]" />
                     <ul className="space-y-[3.625rem] leading-none text-black/[.53] lg:text-[2rem]">
                        {cities.map((city) => (
                           <li key={city}>
                              <button type="button">{city}</button>
                           </li>
                        ))}
                     </ul>
                  </DialogContent>
               </Dialog>
            </li>
         </ul>
      </nav>
   );
}
