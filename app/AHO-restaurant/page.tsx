import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AhoRestaurant from "@/components/AHO-restaurant";
import "@/styles/styles.css";

export default function AHOPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero imageSrc="/AHO-restaurant/aho-bg.png" />
        <AhoRestaurant />
      </main>
      <Footer />
    </div>
  );
}