"use client";

import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

const listAnonces = [
   {
      id: crypto.randomUUID(),
      title: "-20% на меню кухни",
      text: "Ежедневно до 18:00 на всё меню кухни -20% скидка",
      icon: "/anonces/decor-light.svg",
      iconDark: "/anonces/decor-dark.svg",
   },
   {
      id: crypto.randomUUID(),
      title: "гендер пати і девичник | мальчишник",
      text: "Скидка -10% на всё + фирменное поздравление и комплимент от кухни",
      icon: "/anonces/decor-light.svg",
      iconDark: "/anonces/decor-dark.svg",
   },
   {
      id: crypto.randomUUID(),
      title: "день рождения!",
      text: "Именниникам -15% скидка на всё! + фирменное поздравление и комплимент от кухни",
      icon: "/anonces/decor-light.svg",
      iconDark: "/anonces/decor-dark.svg",
   },
];

export default function Anonces() {
   const { theme } = useTheme();

   return (
      <section className="pb-[2.375rem] pt-10 sm:pb-[4.75rem] sm:pt-[4.75rem]">
         <div className="container">
            <h2 className="mb-6 text-2xl font-bold uppercase leading-[137.209302%] min-[480px]:text-3xl sm:mb-8 md:text-4xl">
               Анонсы
            </h2>
            <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
               Готовимся к захватывающему событию: уже [дата] мы ждем вас на
               [название мероприятия]. Вас ждут [основные элементы:
               мастер-классы, выступления, сюрпризы]!
            </p>
            <ul className="space-y-[.625rem]">
               {listAnonces.map((anonce) => (
                  <li
                     key={anonce.id}
                     className="flex items-center gap-2 rounded-xl border border-[#1c1c21] px-3 py-2 transition-colors sm:gap-[.875rem] sm:px-4 sm:py-3 dark:border-white"
                  >
                     <div className="shrink-0">
                        {theme !== "dark" ? (
                           <>
                              <Image
                                 src={anonce.icon}
                                 width={40}
                                 height={40}
                                 className="size-7 sm:size-10"
                                 alt="icon"
                              />
                              <Image
                                 src={anonce.iconDark}
                                 width={40}
                                 height={40}
                                 className="hidden size-7 sm:size-10"
                                 alt="icon"
                              />
                           </>
                        ) : (
                           <Image
                              src={anonce.iconDark}
                              width={40}
                              height={40}
                              alt="icon"
                           />
                        )}
                     </div>
                     <div className="uppercase text-[#060606] dark:text-white">
                        <p className="text-sm sm:text- md:text-base">
                           {anonce.title}
                        </p>
                        <p className="text-xs font-light sm:text-sm">
                           {anonce.text}
                        </p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
