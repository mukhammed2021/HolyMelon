import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeroport = localFont({
   src: [
      {
         path: "./fonts/Aeroport-light-trial.woff2",
         weight: "300",
         style: "normal",
      },
      {
         path: "./fonts/Aeroport-regular-trial.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "./fonts/Aeroport-bold-trial.woff2",
         weight: "700",
         style: "normal",
      },
   ],
});

export const metadata: Metadata = {
   title: "Holy Melon",
   description: "Holy Melon",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <body className={`${aeroport.className} antialiased`}>{children}</body>
      </html>
   );
}
