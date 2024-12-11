"use client";

import { useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const brands = [
   {
      id: crypto.randomUUID(),
      src: "/our_brands/myata.jpg",
      alt: "мята",
      title: "Мята Highvill",
      address: "Байтурсынова 1А",
   },
   {
      id: crypto.randomUUID(),
      src: "/our_brands/myata.jpg",
      alt: "bla bla bar",
      title: "BLA BLA BAR",
      address: "Сарайшык 4",
   },
   {
      id: crypto.randomUUID(),
      src: "/our_brands/myata.jpg",
      alt: "Ресторан AHÓ",
      title: "Ресторан AHÓ",
      address: "Акмешит 1А",
   },
   {
      id: crypto.randomUUID(),
      src: "/our_brands/myata.jpg",
      alt: "BEREZKA",
      title: "BEREZKA",
      address: "Сарайшык 4",
   },
];

export default function OurBrands() {
   const [expandedIndex, setExpandedIndex] = useState(0);

   return (
      <section className="pb-[2.375rem] pt-6 md:pb-[4.75rem] md:pt-12">
         <div className="container">
            <h2 className="mb-10 text-[2.6875rem] font-bold uppercase sm:mb-12 md:mb-16 lg:mb-24">
               наши бренды
            </h2>
         </div>
         <div className="container max-w-[101.75rem]">
            <div className="flex h-[870px] flex-col gap-[2.625rem] overflow-hidden xl:flex-row">
               {brands.map((brand, index) => (
                  <div
                     key={brand.id}
                     onMouseEnter={() => setExpandedIndex(index)}
                     className={cn(
                        "relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 ease-in-out md:rounded-[3.125rem]",
                        expandedIndex === index ? "grow max-xl:basis-60" : "",
                     )}
                  >
                     <Image
                        src={brand.src}
                        width={270}
                        height={870}
                        className="aspect-[200/870] size-full object-cover max-xl:absolute max-xl:inset-[0] max-xl:-z-[1] 2xl:aspect-[270/870]"
                        alt={brand.alt}
                     />
                     <div className="text-white max-xl:mt-auto max-xl:flex max-xl:items-center max-xl:justify-between max-xl:px-12 max-xl:py-8 max-sm:px-9 max-sm:py-6 xl:absolute xl:bottom-16 xl:left-10 xl:right-11">
                        <div
                           className={cn(
                              "xl:invisible xl:opacity-0 xl:transition-[visibility,opacity]",
                              expandedIndex === index
                                 ? "xl:visible xl:opacity-100 xl:delay-500 xl:duration-500"
                                 : "",
                           )}
                        >
                           <h3 className="mb-2 text-xl sm:text-3xl xl:text-4xl 2xl:text-[3.4375rem]">
                              {brand.title}
                           </h3>
                           <div className="flex items-center gap-3">
                              <MapPin />
                              <span className="text-sm md:text-2xl 2xl:text-[2rem]">
                                 {brand.address}
                              </span>
                           </div>
                        </div>
                        <Link
                           href="/"
                           className={cn(
                              "inline-flex size-14 -rotate-45 items-center justify-center rounded-full bg-[#142535] transition-[right,transform] duration-500 hover:-rotate-[135deg] xl:absolute xl:bottom-0 xl:right-1/2 xl:translate-x-1/2",
                              expandedIndex === index
                                 ? "xl:right-0 xl:translate-x-0"
                                 : "",
                           )}
                        >
                           <ArrowDown size={30} />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
