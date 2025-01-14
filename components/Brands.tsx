"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "./theme-provider";

type Venue = {
   name: string;
   address: string;
   image: string;
   link: string; // Добавляем поле для ссылки
};

const venues: Venue[] = [
   {
      name: "SHISHKA HIGHVILL",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-1.png",
      link: "/Shishka-highvill", // Путь для перехода
   },
   {
      name: "SHISHKA",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-2.png",
      link: "/shishka-restaurant",
   },
   {
      name: "BLA BLA BAR",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-3.png",
      link: "/blabla-bar",
   },
   {
      name: "AHO RESTAURANT",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-4.png",
      link: "/AHO-restaurant",
   },
   {
      name: "SHISHKA",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-5.png",
      link: "/shishka-restaurant",
   },
   {
      name: "SHISHKA",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-6.png",
      link: "/shishka-restaurant-6",
   },
   {
      name: "SHISHKA EDITION ",
      address: "Майлина 16/6",
      image: "brands/brands-7.png",
      link: "/shishka-restaurant-7",
   },
];

const Logo: React.FC = () => {
   const { theme } = useTheme();

   return (
      <img
         src={
            theme !== "dark"
               ? "/brands/location-logo.png"
               : "/brands/location-logo-white.png"
         }
         width={16}
         height={16}
         alt="location"
         style={{ width: "16px", height: "16px" }}
      />
   );
};

const VenuesBlock: React.FC = () => {
   const [, setIsMobile] = useState<boolean>(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 470);
      };

      handleResize(); // Установить начальное значение
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <section
         style={{
            maxWidth: "1740px",
            margin: "113px auto 610px",
            padding: "20px",
         }}
      >
         <h2
            style={{
               fontSize: "32px",
               fontWeight: "bold",
               marginBottom: "24px",
            }}
         >
            ЗАВЕДЕНИЯ
         </h2>
         <div
            style={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(325px , 1fr))",
               gap: "41px",
            }}
         >
            {venues.map((venue, index) => (
               <Link
                  href={venue.link} // Используем ссылку из объекта
                  key={index}
                  className="group cursor-pointer mx-auto text-decoration-none"
               >
                  <div>
                     <img
                        src={venue.image}
                        alt={venue.name}
                        style={{
                           borderRadius: "40px",
                           width: "100%",
                           height: "100%",
                           maxWidth: "552px",
                           maxHeight: "309px",
                           objectFit: "cover",
                        }}
                     />
                     <div style={{ padding: "16px 0 60px" }}>
                        <h3
                           style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              marginBottom: "8px",
                              color: "#333",
                           }}
                           className="dark:!text-white"
                        >
                           {venue.name}
                        </h3>
                        <div
                           style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "14px",
                              color: "#555",
                           }}
                        >
                           <Logo />
                           <p className="text-gray-700 dark:text-white">
                              {venue.address}
                           </p>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
};

export default VenuesBlock;
