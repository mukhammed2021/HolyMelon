import Link from "next/link";
import DatePicker from "@/components/ui/DatePicker";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { getPreview } from "@/api/api";
import { formatDate, formatDateTime } from "@/utils/helpers";

export default async function Reports() {
   const ahoPreview = await getPreview("aho restaurant");
   const berezkaPreview = await getPreview("berezka");
   const shishkaPreview = await getPreview("shishka");
   const shishkaPremiumPreview = await getPreview("shishka premium");
   const blaBlaBarPreview = await getPreview("bla bla bar");

   const previews = [
      ahoPreview,
      berezkaPreview,
      shishkaPreview,
      shishkaPremiumPreview,
      blaBlaBarPreview,
   ];

   return (
      <>
         <div className="mb-[3.125rem] flex flex-col flex-wrap items-center gap-6 sm:flex-row sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-[5.3125rem]">
            <DatePicker />
            <Select>
               <SelectTrigger className="rounded-none border-l-0 border-r-0 border-t-0 border-black px-0 text-base font-bold uppercase sm:basis-[15.625rem] md:text-[1.375rem]">
                  <SelectValue placeholder="место" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup className="uppercase">
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="aho restaurant"
                     >
                        Ресторан AHO
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="berezka"
                     >
                        berezka
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="myata"
                     >
                        мята
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="bla bla bar"
                     >
                        bla bla bar
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="shishka"
                     >
                        shishka
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
            <Select>
               <SelectTrigger className="rounded-none border-l-0 border-r-0 border-t-0 border-black px-0 text-left text-base font-bold uppercase sm:basis-[15.625rem] md:text-[1.375rem]">
                  <SelectValue placeholder="город" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup className="uppercase">
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="almaty"
                     >
                        Алматы
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="astana"
                     >
                        Астана (Нур-Султан)
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="oskemen"
                     >
                        Усть-Каменогорск (Öskemen)
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="atyrau"
                     >
                        Атырау
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-base md:text-2xl"
                        value="shymkent"
                     >
                        Шымкент
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-base md:text-2xl"
                        value="baku"
                     >
                        Баку (Азербайджан)
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
            <Select>
               <SelectTrigger className="rounded-none border-l-0 border-r-0 border-t-0 border-black px-0 text-left text-base font-bold uppercase sm:basis-[25rem] md:text-[1.375rem]">
                  <SelectValue placeholder="фотограф" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup className="uppercase">
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="Smirnov Pavel Nikolayevich"
                     >
                        Смирнов Павел Николаевич
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="Kuznetsova Mariya Vladimirovna"
                     >
                        Кузнецова Мария Владимировна
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="Sokolova Anna Petrovna"
                     >
                        Соколова Анна Петровна
                     </SelectItem>
                     <SelectItem
                        className="pl-4 text-sm md:text-2xl"
                        value="Morozova Ivan Ivanovna"
                     >
                        Морозова Иван Ивановна
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div className="mb-14 grid auto-rows-[300px] grid-cols-3 gap-5 min-[480px]:grid-cols-6 sm:mb-16 md:mb-20 md:auto-rows-[500px] lg:mb-28 lg:grid-cols-9 xl:mb-[8.4375rem] xl:grid-cols-12">
            {previews.map(({ resource_id, title, preview, created }) => (
               <Link
                  key={resource_id}
                  href={`/reports/${title.split(" ").join("")}`}
                  className="group relative col-span-3 text-white"
               >
                  <img
                     src={preview}
                     width={420}
                     height={500}
                     className="size-full rounded-[1.25rem] object-cover brightness-50"
                     alt={title}
                  />
                  <p className="absolute left-5 top-6 rounded-[1.25rem] bg-[#212020]/[.7] px-[1.5625rem] py-[.375rem] text-base backdrop-blur-[56px] 2xl:left-[2.375rem] 2xl:top-10 2xl:text-xl">
                     Астана
                  </p>
                  <div className="absolute bottom-6 left-5 2xl:left-[2.375rem]">
                     <p className="max-w-[12.8125rem] font-bold uppercase transition-transform group-hover:translate-x-2 xl:text-xl 2xl:text-3xl">
                        {title}
                     </p>
                     <time
                        dateTime={formatDateTime(created)}
                        className="text-base 2xl:text-xl"
                     >
                        {formatDate(created)}
                     </time>
                  </div>
               </Link>
            ))}
         </div>
      </>
   );
}
