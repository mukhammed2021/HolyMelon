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
      <section className="pb-[4.75rem] pt-[4.75rem]">
         <div className="container">
            <h2 className="mb-8 text-2xl font-bold uppercase leading-[137.209302%] min-[480px]:text-3xl md:text-[2.6875rem]">
               Анонсы
            </h2>
            <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl">
               Готовимся к захватывающему событию: уже [дата] мы ждем вас на
               [название мероприятия]. Вас ждут [основные элементы:
               мастер-классы, выступления, сюрпризы]!
            </p>
            <ul className="space-y-[.625rem]">
               {listAnonces.map((anonce) => (
                  <li
                     key={anonce.id}
                     className="group flex items-center gap-[.875rem] rounded-xl border border-[#1c1c21] px-4 py-3 transition-colors hover:bg-[#142535] sm:px-5 sm:py-4 dark:border-white"
                  >
                     <div className="shrink-0">
                        {theme !== "dark" ? (
                           <>
                              <Image
                                 src={anonce.icon}
                                 width={40}
                                 height={40}
                                 className="group-hover:hidden"
                                 alt="icon"
                              />
                              <Image
                                 src={anonce.iconDark}
                                 width={40}
                                 height={40}
                                 className="hidden group-hover:block"
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
                     <div className="uppercase text-[#060606] group-hover:text-white dark:text-white">
                        <p className="text-sm sm:text-lg md:text-xl">
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
