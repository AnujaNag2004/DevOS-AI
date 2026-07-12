import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Showcase from "@/components/showcase/Showcase";
import Why from "@/components/why/Why";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Why />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}