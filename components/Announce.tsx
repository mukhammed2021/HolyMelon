"use client";

import React from "react";

type Announcement = {
  id: number;
  title: string;
  description: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    title: "-20% НА МЕНЮ КУХНИ",
    description: "Ежедневно до 18:00 на все меню кухни -20% скидка",
  },
  {
    id: 2,
    title: "ГЕНДЕР ПАТИ | ДЕВИЧНИК | МАЛЬЧИШНИК",
    description:
      "Скидка -10% на все + фирменное поздравление и комплимент от кухни",
  },
  {
    id: 3,
    title: "ДЕНЬ РОЖДЕНИЯ!",
    description:
      "Именинникам -15% скидка на все! + фирменное поздравление и комплимент от кухни",
  },
  {
    id: 4,
    title: "",
    description:
      "",
  },
];

// max-width: 1990px;
//     padding-inline: 4.52%;
//     text-align: left;
//     margin: 152px auto;

const AnnouncementsBlock: React.FC = () => {
  return (
    <section style={{ maxWidth: "1990px" , paddingInline: "4.52%" , textAlign: "left", margin: "152px auto" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>АНОНСЫ</h2>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        Готовимся к захватывающему событию: уже [дата] мы ждем вас на [название
        мероприятия]. Вас ждут [основные элементы: мастер-классы, выступления,
        сюрпризы]!
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            style={{
              border: "1px solid #000",
              borderRadius: "8px",
              padding: "0.92%",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "background-color 0.3s, color 0.3s",
              cursor: "pointer",
              height: "100%",
              minHeight: "83px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#142535";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.color = "";
            }}
          >
            <div
              style={{
                fontSize: "24px",
                transform: "rotate(45deg)",
                transition: "color 0.3s",
              }}
            >
              ✶
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  margin: "0 0 8px 0",
                  fontWeight: "bold",
                }}
              >
                {announcement.title}
              </h3>
              <p style={{ fontSize: "14px", margin: 0 }}>
                {announcement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsBlock;
