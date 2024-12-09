import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentEvents from "@/app/RecentEvents";

export default function Home() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <RecentEvents />
            <AboutUs />
         </main>
         <Footer />
      </div>
   );
}
