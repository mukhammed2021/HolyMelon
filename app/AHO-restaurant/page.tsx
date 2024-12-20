import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AhoRestaurant from "@/components/AHO-restaurant";
import "@/styles/styles.css"; // Подключаем глобальный CSS

export default function AHOPage() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <AhoRestaurant />
         </main>
         <Footer />
      </div>
   );
}
