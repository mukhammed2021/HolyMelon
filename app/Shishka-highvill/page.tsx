import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero-restaurant";
import AhoRestaurant from "@/components/Shishka-highvill";
import "@/styles/styles.css";

export default function ShishkaHighvillPage() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero
               imageSrc="/Shishka-highvill/Shishka-highvill-bg.png"
               title="SHISHKA HIGHVILL"
               description="ваш остров вдохновения и вкуса в центре города"
            />
            <AhoRestaurant />
         </main>
         <Footer />
      </div>
   );
}
