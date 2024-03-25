import FinalVideo from "./FinalVideo";
import About from "./components/About/page";
import Company from "./components/Company/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
import HeroSection from "./components/HeroSection/page";
import Navbar from "./components/Navbar/page";

export default function Home() {
  return (
    <body className="flex flex-col">
      <Navbar />

      <main>
        <HeroSection />
        <About />
        <Company />
        <FinalVideo />
        <Contact />
      </main>

      <Footer />
    </body>
  );
}
