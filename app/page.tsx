import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
         </main>
         <Footer />
      </div>
   );
}
