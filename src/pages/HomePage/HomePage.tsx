import { Navigation } from "../../layouts/MainLayout/Navigation";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Security } from "./components/Security";

export const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Navigation />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};
