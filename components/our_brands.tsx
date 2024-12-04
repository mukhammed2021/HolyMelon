"use client";

import React, { useState } from "react";

// Типы для данных брендов
type Brand = {
  id: number;
  name: string;
  address: string;
  image: string;
};

const brands: Brand[] = [
  {
    id: 1,
    name: "Мята Highvill",
    address: "Байтурсынова 1А",
    image: "our_brands/first-brand.png", // Путь к изображению
  },
  {
    id: 2,
    name: "The High Club",
    address: "Достык 123",
    image: "our_brands/second-brand.png", // Путь к изображению
  },
  {
    id: 3,
    name: "Orange Bar",
    address: "Абая 45",
    image: "our_brands/third-brand.png", // Путь к изображению
  },
  {
    id: 4,
    name: "Berezka Lounge",
    address: "Тауелсиздик 67",
    image: "our_brands/fouth-brand.png", // Путь к изображению
  },
];

const BrandsBlock: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1); // По умолчанию первая карточка активна

  return (
    <section style={{ textAlign: "left", padding: "20px" }}>
      <h2 style={{fontFamily: "Aeroport", fontSize: "43px", fontWeight: "700", margin: "92px 0 62px"  }}>НАШИ БРЕНДЫ</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: brands
            .map((brand) => (brand.id === activeId ? "2.5fr" : "1fr"))
            .join(" "),
          gap: "44px",
          transition: "grid-template-columns 0.5s ease",
          marginInline: "8.182%",
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => setActiveId(brand.id)} // Меняем активную карточку по клику
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              minHeight: "870px",
              maxHeight: "875px"
            }}
          >
            <img
              src={brand.image}
              alt={brand.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center", // Показываем середину изображения
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.7)", // Добавлен эффект текста
              }}
            >
              <h3 style={{ fontSize: "18px", margin: "0" }}>{brand.name}</h3>
              <p style={{ fontSize: "14px", margin: "0" }}>{brand.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsBlock;
