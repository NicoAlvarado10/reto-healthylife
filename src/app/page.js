import { About } from "./sections/About";
import { Benefits } from "./sections/Benefits";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Products } from "./sections/Products";
import { Testimonials } from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      <Header/>
      <Hero/>
      <About/>
      <Benefits/>
      <Products/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}