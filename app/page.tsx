import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ThoughtProcess from "@/components/ThoughtProcess";
import WhyItWorks from "@/components/WhyItWorks";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <ThoughtProcess />
      <WhyItWorks />
      <Approach />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
