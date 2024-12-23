"use client";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface GalleryProps {
   photos: {
      id: string;
      name: string;
      url: string;
   }[];
}

export default function Gallery({ photos }: GalleryProps) {
   const [visible, setVisible] = useState(photos.slice(0, 4));

   function loadMore() {
      const currentLength = visible.length;
      const more = photos.slice(currentLength, currentLength + 4);
      setVisible([...visible, ...more]);
   }

   return (
      <>
         <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="gallery"
         >
            {visible.map((photo, index) => {
               let extraClass = "";
               if (index === 4 || index === 10 || index === 11) {
                  extraClass = "xl:col-span-6";
               } else if (index === 7 || index === 8 || index === 9) {
                  extraClass = "xl:col-span-4";
               }

               return (
                  <a
                     key={photo.id}
                     href={photo.url}
                     className={cn("col-span-3", extraClass)}
                  >
                     <img
                        src={photo.url}
                        className="aspect-[420/500] size-full rounded-[1.25rem] object-cover"
                        width={420}
                        height={500}
                        alt={photo.name}
                     />
                  </a>
               );
            })}
         </LightGallery>
         {visible.length < photos.length && (
            <div className="mb-10 text-center sm:mb-28">
               <Button
                  onClick={loadMore}
                  className="h-auto rounded-[3.125rem] border border-[#3D3D3D] bg-[#212020] px-5 py-3 text-lg font-bold md:py-5 md:text-xl lg:px-10 lg:text-2xl xl:px-[3.125rem] dark:text-white dark:hover:bg-neutral-800"
               >
                  Показать еще
               </Button>
            </div>
         )}
      </>
   );
}
