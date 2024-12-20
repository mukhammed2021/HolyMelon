"use client";

import React from "react";
import Link from "next/link";

type Venue = {
   name: string;
   address: string;
   image: string;
   link: string; // Добавляем поле для ссылки
};

const venues: Venue[] = [
   {
      name: "BEREZKA",
      address: "Улица Жастар, дом 8, кв. 12, Астана, Казахстан",
      image: "brands/brands-1.png",
      link: "/berezka-restaurant", // Путь для перехода
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
];

const VenuesBlock: React.FC = () => {
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
               gridTemplateColumns: "repeat(auto-fit, minmax(422px , 1fr))",
               gap: "41px",
            }}
         >
            {venues.map((venue, index) => (
               <Link
                  href={venue.link} // Используем ссылку из объекта
                  key={index}
                  style={{
                     cursor: "pointer",
                     border: "1px solid #fff",
                     marginInline: "auto",
                     textDecoration: "none", // Убираем подчёркивание текста
                  }}
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
                           <img
                              src="/brands/location-logo.png"
                              alt="location"
                              style={{ width: "16px", height: "16px" }}
                           />
                           <p>{venue.address}</p>
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
