import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Filieres from "@/components/Filieres";
import StatsBar from "@/components/StatsBar";
import Admission from "@/components/Admission";
import Promo from "@/components/Promo";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <Hero />
      <About />
      <Filieres />
      <StatsBar />
      <Admission />
      <Promo />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
