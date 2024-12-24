import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";

export default function BrandsPage() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero imageSrc="/hero/hero-bg.jpg" />
            <Brands />
         </main>
         <Footer />
      </div>
   );
}
