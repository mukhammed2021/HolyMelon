import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getPreview } from "@/api/api";

const items = [
   {
      id: crypto.randomUUID(),
      title: "aho restaurant",
      date: "5 Сентября",
      link: "/ahorestaurant",
      linkClassName: "row-span-2",
      imgClassName: "object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 460,
   },
   {
      id: crypto.randomUUID(),
      title: "bla bla bar",
      date: "5 Сентября",
      link: "/",
      imgClassName: "aspect-[384/230] object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 230,
   },
   {
      id: crypto.randomUUID(),
      title: "berezka",
      date: "5 Сентября",
      link: "/berezka",
      imgClassName: "aspect-[384/230] object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 230,
   },
   {
      id: crypto.randomUUID(),
      title: "aho restaurant",
      date: "5 Сентября",
      link: "/",
      linkClassName: "row-span-2",
      imgClassName: "object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 460,
   },
   {
      id: crypto.randomUUID(),
      title: "shishka premium",
      date: "5 Сентября",
      link: "/",
      linkClassName: "row-span-2",
      imgClassName: "object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 460,
   },
   {
      id: crypto.randomUUID(),
      title: "shishka",
      date: "5 Сентября",
      link: "/",
      linkClassName: "row-span-2",
      imgClassName: "object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 460,
   },
   {
      id: crypto.randomUUID(),
      title: "berezka",
      date: "5 Сентября",
      link: "/",
      imgClassName: "aspect-[384/230] object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 230,
   },
   {
      id: crypto.randomUUID(),
      title: "aho restaurant",
      date: "5 Сентября",
      link: "/",
      imgClassName: "aspect-[384/230] object-cover size-full",
      src: "/recent-events/01.jpeg",
      width: 384,
      height: 230,
   },
];

export default function RecentEvents() {
   // const ahoPreview = await getPreview("aho restaurant");
   // const blaBlaBarPreview = await getPreview("bla bla bar");
   // const berezkaPreview = await getPreview("berezka");
   // const shishkaPremiumPreview = await getPreview("shishka premium");
   // const shishka = await getPreview("shishka");

   // const previews = [
   //    {
   //       id: 1,
   //       ahoPreview,
   //    },
   //    {
   //       id: 2,
   //       blaBlaBarPreview,
   //    },
   //    {
   //       id: 3,
   //       berezkaPreview,
   //    },
   //    {
   //       id: 4,
   //       ahoPreview,
   //    },
   //    {
   //       id: 5,
   //       shishkaPremiumPreview,
   //    },
   //    {
   //       id: 6,
   //       shishka,
   //    },
   //    {
   //       id: 7,
   //       berezkaPreview,
   //    },
   //    {
   //       id: 8,
   //       ahoPreview,
   //    },
   // ];

   return (
      <section className="pb-7 md:pt-10 lg:pt-14">
         <div className="container max-w-[101.75rem]">
            <h2 className="mb-12 text-[2.6875rem] font-bold uppercase leading-[137.209302%]">
               недавние события
            </h2>
            <div className="grid auto-rows-[14.375rem] grid-cols-1 grid-rows-[repeat(3,auto)] gap-5 sm:grid-cols-2 min-[992px]:grid-cols-3 xl:grid-cols-4">
               {items.map((item) => (
                  <Link
                     key={item.id}
                     href={item.link}
                     className={cn(
                        item.linkClassName,
                        "group relative text-white",
                     )}
                  >
                     <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        className={cn(item.imgClassName, "rounded-[1.25rem]")}
                        alt="1"
                     />
                     <p className="absolute left-5 top-6 rounded-[1.25rem] bg-[#212020]/[.7] px-[1.5625rem] py-[.375rem] text-base backdrop-blur-[56px] 2xl:left-[2.375rem] 2xl:top-10 2xl:text-xl">
                        Астана
                     </p>
                     <div className="absolute bottom-6 left-5 2xl:left-[2.375rem]">
                        <p className="max-w-[12.8125rem] font-bold uppercase transition-transform group-hover:translate-x-2 xl:text-xl 2xl:text-3xl">
                           {item.title}
                        </p>
                        <time
                           dateTime="09-05"
                           className="text-base 2xl:text-xl"
                        >
                           {item.date}
                        </time>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
