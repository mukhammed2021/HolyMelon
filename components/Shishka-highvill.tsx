"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useTheme } from "./theme-provider"; // Убедитесь, что путь правильный

const ShishkaHighvill: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const { theme } = useTheme(); // Получаем текущую тему

    const features = [
        {
            title: "ДЕНЬ РОЖДЕНИЯ",
            description:
                "Скидка -15% на всё комплимент от кухни и фирменное поздравление.",
        },
        {
            title: "МАЛЬЧИШНИК | ДЕВИЧНИК | ГЕНДЕРПАТИ",
            description:
                "Скидка -10% на всё комплимент от заведения и фирменное поздравление от команды",
        },
        {
            title: "Ежедневно с 12:00 до 18:00",
            description:
                "Скидка -20% на всё меню кухни",
        },

        {
            title: "VIP-комнаты",
            description: "С понедельника по пятницу скидка -15% на всё при бронировании VIP-комнаты",
        },
        {
            title: "Среда — коктейли 1 = 2",
            description: "При покупке одного коктейля второй — в подарок",
        },
        {
            title: "Четверг: мясо + вино",
            description: "Скидка -20% на стейки + бокал красного или белого вина в подарок",
        },
        {
            title: "С воскресенья по вторник",
            description: "Скидка -20% на пиво + бонус от кухни — мини пивная тарелка",
        },
        {
            title: "Кальян за 6 000 тенге",
            description: "чайник чая и комплимент от кухни до 18:00",
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
            <div className="aho-block bg-white dark:bg-black text-black dark:text-white">

                {/* Restaurant Name */}



                <div className="breadcrumbs">
                    <span>ГЛАВНАЯ СТРАНИЦА</span> / <span>БРЕНДЫ</span> /{" "}
                    <span>SHISHKA HIGHVILL</span>
                </div>
                <div className="aho-section">
                    <div className="aho-top-section">
                        <div className="restaurant-info">
                            {/* Звёздочки */}
                            <div className="category-stars">
                                <img src="/AHO-restaurant/5-stars.png" alt="5 stars" />
                            </div>
                            {/* Заголовок */}
                            <h1 className="restaurant-title">SHISHKA HIGHVILL</h1>
                            <p className="restaurant-subtitle">
                                ВАШ ОСТРОВ ВДОХНОВЕНИЯ И ВКУСА В ЦЕНТРЕ ГОРОДА
                            </p>
                            {/* Описание */}
                            <p className="restaurant-description">
                                Добро пожаловать в Shishka Highvill — место,
                                где стильный интерьер сочетается с уютом,
                                а каждая деталь продумана для вашего комфорта.
                                Мы создали пространство, которое идеально
                                подходит для отдыха, приватных встреч и
                                особенных событий.
                            </p>
                            {/* Адрес */}
                            <div className="restaurant-links">
                                <div className="restaurant-address">
                                    <img
                                        src={theme !== "dark" ? "/AHO-restaurant/location.png" : "/brands/location-logo-white.png"}
                                        alt="Location"
                                    />
                                    <span>
                                        <a href="https://2gis.kz/astana/geo/70030076493117994">
                                            Байтурсынова 1А
                                        </a>
                                    </span>
                                </div>
                                {/* 2GIS */}
                                <div className="restaurant-link">
                                    <img
                                        src={theme !== "dark" ? "/AHO-restaurant/2gis-location.png" : "/AHO-restaurant/2gis-location-white.png"}
                                        alt="2GIS"
                                    />
                                    <div>
                                        <p>МЫ В 2GIS </p>
                                        <a
                                            href="https://2gis.kz/astana/firm/70000001089234583?m=71.424314%2C51.121191%2F16"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://2gis.kz/astana/firm/70000001089234583?m=71.424314%2C51.121191%2F16
                                        </a>
                                    </div>
                                </div>
                                {/* Контакты */}
                                <div className="restaurant-contacts">
                                    <img
                                        src={theme !== "dark" ? "/AHO-restaurant/contacts.png" : "/AHO-restaurant/contacts-white.png"}
                                        alt="Contacts"
                                    />
                                    <div>
                                        <p>Контакты</p>
                                        <span>+7 708 080 99 99</span>
                                        <a href="https://wa.me/77080809999?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%B8%D0%B7%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%202%D0%93%D0%98%D0%A1">
                                            Whatsapp</a>
                                    </div>
                                </div>
                                {/* Часы работы */}
                                <div className="restaurant-hours">
                                    <img
                                        src={theme !== "dark" ? "/AHO-restaurant/work-time.png" : "/AHO-restaurant/work-time-white.png"}
                                        alt="Working hours"
                                    />
                                    <div>
                                        <p>ЧАСЫ РАБОТЫ</p>
                                        <div className="work-time">
                                            <p>
                                                <span>Понедельник - Пятница</span>
                                                <span>12:00-03:00</span>
                                            </p>
                                            <p>
                                                <span>Суббота - Воскресенье</span>
                                                <span>12:00-04:00</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-block">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                maxWidth: "777px",
                            } as React.CSSProperties}
                            spaceBetween={5}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2" // Класс из глобального CSS
                        >
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-1.png" alt="Nature 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-2.png" alt="Nature 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-3.png" alt="Nature 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-4.png" alt="Nature 4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-5.png" alt="Nature 5" />
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
                                <img src="/Shishka-highvill/Shishka-highvill-1.png" alt="Nature 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-2.png" alt="Nature 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-3.png" alt="Nature 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-4.png" alt="Nature 4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Shishka-highvill/Shishka-highvill-5.png" alt="Nature 5" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="brand-history brand-history-small">
                    <h1>
                        Почему выбирают Shishka Highvill?
                    </h1>
                    <p>
                        • Лаундж-зона для отдыха: Пространство для приятного времяпрепровождения с друзьями или семьёй.
                    </p>
                    <p>
                        • 3 VIP-комнаты: Уютные и уединённые залы для компаний от 6 до 12 человек.
                    </p>
                    <p>
                        • Живая музыка: Каждые выходные создаём атмосферу праздника.               </p>
                    <h1>
                        Интерьеры, которые вдохновляют
                    </h1>
                    <p>
                        • Солнечный зал: Атмосфера лета и тепла, идеально для душевных встреч.
                    </p>
                    <p>
                        • Зал с приглушённым светом: Мягкие диваны и спокойная обстановка для тех, кто ценит уют и уединение.               </p>
                </div>
                <div className="container">
                    <div className="offer-description">
                        <h2>Специальные предложения для гостей</h2>
                        <p>Мы заботимся о каждом госте и регулярно радуем вас выгодными акциями:</p>
                    </div>
                    {/* Основные блоки */}
                    <section className="features">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-item"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "14px",
                                    textAlign: "center",
                                }}
                            >
                                <div style={{ fontSize: "30px" }}></div>
                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}

                    </section>

                    <div className="reserve-description">
                        <p>Забронируйте ваш вечер прямо сейчас!</p>
                        <p>
                            Позвольте нам сделать ваш отдых незабываемым. Оставьте заявку на сайте или свяжитесь с нами для бронирования столика или VIP-комнаты.
                            Shishka Highvill на Байтурсынова 1А — место, где комфорт встречается с элегантностью.
                        </p>
                    </div>

                    <div className="halls">
                        <div className="first-hall hall">
                            <div className="hall-name">
                                <h4>Лаунж-зал: “Тёмная энергия”</h4>
                                <p>
                                    Лаунж SHISHKA HIGHVILL — это место,
                                    где время замедляется, а вы погружаетесь
                                    в атмосферу уюта и тайны. Густой аромат дыма,
                                    мягкие диваны, приглушённый свет — всё здесь
                                    говорит о глубине и расслаблении.
                                </p>
                                <p>
                                    Здесь вы ощущаете себя в эпицентре тепла и спокойствия.
                                    <br />
                                    Это ваш личный кокон уюта, где даже шумные компании становятся тихими
                                </p>
                            </div>
                            <div className="hall-image">
                                <img src="/Shishka-highvill/hall-1.png" alt="" />
                            </div>
                        </div>

                        <div className="second-hall hall">
                            <div className="hall-image">
                                <img src="/Shishka-highvill/hall-2.jpeg" alt="" />
                            </div>

                            <div className="hall-name">
                                <h4>Зелёный зал: “Живая энергия</h4>
                                <p>
                                    Второй зал — это противоположность,
                                    ода жизни и природе. Наполненный светом,
                                    зелёными акцентами и воздухом, он бодрит
                                    и вдохновляет. Это пространство заряжает
                                    энергией, мотивирует на новые открытия и
                                    поднимает настроение.
                                </p>
                                <p>
                                    Здесь вы чувствуете свободу.
                                    <br />
                                    Это место, где можно по-настоящему отдохнуть и вдохновиться красотой.                                </p>                            </div>

                        </div>
                        <div className="hall-description">
                            <p>
                                SHISHKA HIGHVILL — это портал в мир, где ваше настроение становится центром внимания. Здесь каждое пространство словно отражает вашу внутреннюю энергию, позволяя выбирать, кто вы сегодня.
                            </p>
                            <p>
                                Идея SHISHKA HIGHVILL родилась из наблюдений за природой человеческих эмоций. Мы никогда не остаёмся в одном состоянии: сегодня нам хочется уединения, завтра — быть частью жизни. Наши два зала — это метафора этих перемен. Они созданы для того, чтобы вы могли выбирать своё настроение и наполнять его особенными моментами.
                            </p>
                            <p>
                                Это место вдохновлено балансом. Мы не разделяем тёмное и светлое, активное и спокойное. Мы создаём пространство, где эти противоположности встречаются, чтобы дарить вам выбор.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ShishkaHighvill;