import { Cta } from "../../components/CTA/CTA";
import { Features } from "../../components/Features/Features";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { Pricing } from "../../components/Pricing/Pricing";
import { Security } from "../../components/Security/Security";
import { Navigation } from "../../layouts/MainLayout/Navigation";
import { PATHS } from "../../shared/constants/path";

export const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Navigation menu={PATHS.HOME} />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
};
