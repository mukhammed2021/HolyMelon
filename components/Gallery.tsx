"use client";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { cn } from "@/lib/utils";

interface GalleryProps {
   photos: {
      id: string;
      name: string;
      url: string;
   }[];
}

export default function Gallery({ photos }: GalleryProps) {
   return (
      <LightGallery
         speed={500}
         plugins={[lgThumbnail, lgZoom]}
         elementClassNames="gallery"
      >
         {photos.map((photo, index) => {
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
   );
}
