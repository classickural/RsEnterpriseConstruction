import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>R S ENTERPRISES - Building Construction & Interior Services</title>
        <meta
          name="description"
          content="R S ENTERPRISES offers professional building construction, false ceiling work, interior designing, and building materials in Mayiladuthurai, Tamil Nadu."
        />
        <meta name="keywords" content="construction, interior design, false ceiling, building materials, Mayiladuthurai" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
