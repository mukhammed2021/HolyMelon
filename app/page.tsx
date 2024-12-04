import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/our_brands";
import Announce from "@/components/Announce";


export default function Home() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <Brands />
            <Announce />

         </main>
         <Footer />
      </div>
   );
}
