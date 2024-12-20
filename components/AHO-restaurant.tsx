"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const AHOrestaurant: React.FC = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   const features = [
      {
         title: "ЯРКИЕ ВЫХОДНЫЕ С SANDWAVE PARTIES",
         description:
            "Каждую субботу и воскресенье наши шоу-программы переносят гостей в мир музыки и танцев.",
      },
      {
         title: "VIP-ЗОНА ДЛЯ УЕДИНЕННОГО ОТДЫХА",
         description:
            "Уютная комната до 25 человек идеально подходит для особых встреч.",
      },
      {
         title: "РАЗНООБРАЗНОЕ МЕНЮ",
         description:
            "Обширное барное и основное меню, дополненное специальными предложениями.",
      },
      {
         title: "ДЫМНЫЕ КОКТЕЙЛИ SPECIALS",
         description: "Эксклюзивные сочетания вкусов для истинных ценителей.",
      },
   ];

   const specialOffers = [
      {
         title: "HOOKAH SPECIAL",
         description:
            "Дымная чаша + комплимент от кухни и бара всего за 6000 тенге.",
      },
      {
         title: "SPECIAL OFFER",
         description: "Скидка 20% на все блюда из меню.",
      },
      {
         title: "CELEBRATE WITH ANO",
         description:
            "В день рождения вас ждет скидка 15% и комплимент от кухни.",
      },
      {
         title: "МАЛЬЧИШНИК И ДЕВИЧНИК",
         description: "Скидка 10% на весь чек + поздравление от команды АНО.",
      },
      {
         title: "WINE DOWN THURSDAY",
         description: "Каждый четверг наслаждайтесь скидкой 20% на вино.",
      },
      {
         title: "SAVOR THE MOMENT",
         description: "Каждую среду второй коктейль в подарок.",
      },
   ];

   return (
      <>
         <div className="aho-block">
            <div className="breadcrumbs">
               <span>ГЛАВНАЯ СТРАНИЦА</span> / <span>БРЕНДЫ</span> /{" "}
               <span>АНО</span>
            </div>

            <div className="aho-section">
               <div className="aho-top-section">
                  <div className="restaurant-info">
                     {/* Звёздочки */}
                     <div className="category-stars">
                        <img src="/AHO-restaurant/5-stars.png" alt="5 stars" />
                     </div>

                     {/* Заголовок */}
                     <h1 className="restaurant-title">РЕСТОРАН АНО</h1>
                     <p className="restaurant-subtitle">
                        ВАШ ОСТРОВ ВДОХНОВЕНИЯ И ВКУСА В ЦЕНТРЕ ГОРОДА
                     </p>

                     {/* Описание */}
                     <p className="restaurant-description">
                        Добро пожаловать в АНО, место, где культурные мотивы,
                        пряные ароматы и завораживающие ритмы афро-хауса
                        сливаются воедино, создавая уникальную атмосферу отдыха
                        и наслаждения.
                     </p>

                     {/* Адрес */}
                     <div className="restaurant-address">
                        <img
                           src="/AHO-restaurant/location.png"
                           alt="Location"
                        />
                        <span>УЛИЦА АКМЕШИТ 1А, АСТАНА, КАЗАХСТАН</span>
                     </div>

                     {/* 2GIS */}
                     <div className="restaurant-link">
                        <img
                           src="/AHO-restaurant/2gis-location.png"
                           alt="2GIS"
                        />
                        <div>
                           <p>МЫ В 2GIS </p>
                           <a
                              href="https://2gis.ru/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              https://2gis.ru/
                           </a>
                        </div>
                     </div>

                     {/* Контакты */}
                     <div className="restaurant-contacts">
                        <img
                           src="/AHO-restaurant/contacts.png"
                           alt="Contacts"
                        />
                        <div>
                           <p>Контакты</p>
                           <span>+7 777 899 99 99</span>
                        </div>
                     </div>

                     {/* Часы работы */}
                     <div className="restaurant-hours">
                        <img
                           src="/AHO-restaurant/work-time.png"
                           alt="Working hours"
                        />
                        <div>
                           <p>ЧАСЫ РАБОТЫ</p>
                           <span>
                              Открыто · Закроется в <strong>02:00</strong>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="swiper-block">
                  <Swiper
                     style={
                        {
                           "--swiper-navigation-color": "#fff",
                           "--swiper-pagination-color": "#fff",
                           maxWidth: "777px",
                        } as React.CSSProperties
                     }
                     spaceBetween={5}
                     navigation={true}
                     thumbs={{ swiper: thumbsSwiper }}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper2" // Класс из глобального CSS
                  >
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-1.png" alt="Nature 1" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-2.png" alt="Nature 2" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-3.png" alt="Nature 3" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-4.png" alt="Nature 4" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-5.png" alt="Nature 5" />
                     </SwiperSlide>
                  </Swiper>
                  <Swiper
                     onSwiper={setThumbsSwiper}
                     spaceBetween={5}
                     slidesPerView={5}
                     freeMode={true}
                     watchSlidesProgress={true}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper" // Класс из глобального CSS
                  >
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-1.png" alt="Nature 1" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-2.png" alt="Nature 2" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-3.png" alt="Nature 3" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-4.png" alt="Nature 4" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="/AHO-restaurant/AHO-5.png" alt="Nature 5" />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>

            <div className="container">
               {/* Основные блоки */}
               <section className="features">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="feature-item"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "14px",
                        }}
                     >
                        <div style={{ fontSize: "30px" }}>✶</div>
                        <div>
                           <h3>{feature.title}</h3>
                           <p>{feature.description}</p>
                        </div>
                     </div>
                  ))}
               </section>

               <div className="aho-bottom-section">
                  <section className="special-offers">
                     <h2>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ В АНО!</h2>
                     {specialOffers.map((offer, index) => (
                        <div key={index} className="offer-item">
                           <h3>{offer.title}</h3>
                           <p>{offer.description}</p>
                        </div>
                     ))}
                  </section>

                  {/* Галерея */}
                  <section className="gallery">
                     <div className="gallery-item large">
                        <img
                           src="/AHO-restaurant/bottom-img-1.png"
                           alt="Большое изображение"
                        />
                     </div>
                     <div className="gallery-item small">
                        <img
                           src="/AHO-restaurant/bottom-img-2.png"
                           alt="Маленькое изображение 1"
                        />
                     </div>
                     <div className="gallery-item small">
                        <img
                           src="/AHO-restaurant/bottom-img-3.png"
                           alt="Маленькое изображение 2"
                        />
                     </div>
                  </section>
               </div>

               {/* Специальные предложения */}
            </div>
         </div>
      </>
   );
};

export default AHOrestaurant;
