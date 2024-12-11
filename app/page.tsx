import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentEvents from "@/app/RecentEvents";
import Anonces from "./Anonces";
import OurBrands from "./OurBrands";

export default function Home() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <RecentEvents />
            <OurBrands />
            <Anonces />
            <AboutUs />
         </main>
         <Footer />
      </div>
   );
}
