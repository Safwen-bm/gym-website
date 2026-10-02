import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Programs from "./components/Programs";
import About from "./components/About";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Programs />
        <About />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
