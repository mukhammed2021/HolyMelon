import Image from "next/image";
import decor from "/public/about-us/decor/01.svg";
import logo from "/public/about-us/logo.png";

export default function AboutUs() {
   return (
      <section className="pb-[5.625rem] pt-[4.75rem] md:pb-28 lg:pb-32 xl:pb-40 2xl:pb-[11.25rem]">
         <div className="container">
            <div className="mb-5 border-b border-black font-bold uppercase sm:mb-10 md:mb-16">
               <div className="mb-1 text-sm leading-[135%] sm:text-xl">
                  о нас
               </div>
               <h2 className="text-2xl leading-[137.931034%] sm:text-4xl md:text-5xl lg:text-[3.625rem]">
                  наша компания
               </h2>
            </div>
            <div className="flex flex-col-reverse items-center justify-between gap-y-9 max-sm:text-base max-[480px]:text-sm lg:gap-x-10 xl:flex-row xl:gap-x-16 2xl:gap-x-[5.3125rem]">
               <div className="xl:basis-[703px]">
                  <p className="mb-10 sm:mb-14 md:mb-[4.625rem]">
                     Cтремление всей жизни запечатлеть необычное в обычном,
                     заморозить мимолетные моменты времени и поделиться красотой
                     мира, какой мы все видим. Вдохновление в каждом уголке в
                     этой разнообразной истории.
                  </p>
                  <div className="mb-4 flex items-center gap-[10px] sm:mb-7 md:mb-10">
                     <Image src={decor} alt="декор" />
                     <p className="text-3xl">Контакты</p>
                  </div>
                  <address className="not-italic">
                     <p className="text-[1.375rem]">Почта</p>
                     <a
                        href="mailto:holymelonmanagementgroup@gmail.com"
                        className="mb-8 inline-block hover:underline"
                     >
                        holymelonmanagementgroup@gmail.com
                     </a>
                     <div className="flex flex-wrap items-center gap-7 xl:gap-x-10 2xl:gap-x-[5.6875rem]">
                        <div className="flex items-start gap-x-3">
                           <Image
                              src="/about-us/icons/2gis.png"
                              width={30}
                              height={30}
                              className="size-[1.875rem]"
                              alt="2GIS"
                           />
                           <div>
                              <p>Мы в 2GIS</p>
                              <a
                                 href="https://2gis.ru/"
                                 target="_blank"
                                 className="underline hover:no-underline"
                              >
                                 https://2gis.ru/
                              </a>
                           </div>
                        </div>
                        <div className="flex items-start gap-x-3">
                           <Image
                              src="/about-us/icons/instagram.png"
                              width={30}
                              height={30}
                              className="size-[1.875rem]"
                              alt="instagram"
                           />
                           <div>
                              <p>Мы в INSTAGRAM</p>
                              <a
                                 href="https://www.instagram.com/holymelon.mgmt/#"
                                 target="_blank"
                                 className="underline hover:no-underline"
                              >
                                 @holymelon.mgmt
                              </a>
                           </div>
                        </div>
                     </div>
                  </address>
               </div>
               <div className="flex grow justify-center rounded-[40px] bg-[#fbfbfb] py-[3.3125rem] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] max-xl:w-full xl:min-w-[43.75rem]">
                  <Image
                     src={logo}
                     alt="логотип holy melon"
                     className="aspect-[450/405] object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
