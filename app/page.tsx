import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeCreate from "@/components/WhatWeCreate";
import FeaturedWork from "@/components/FeaturedWork";
import Approach from "@/components/Approach";
import ThoughtProcess from "@/components/ThoughtProcess";
import WhyItWorks from "@/components/WhyItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeCreate />
      <FeaturedWork />
      <Approach />
      <ThoughtProcess />
      <WhyItWorks />
      <About />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
