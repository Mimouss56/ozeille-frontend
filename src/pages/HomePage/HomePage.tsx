import { Cta } from "../../components/CTA/CTA";
import { Features } from "../../components/Features/Features";
import { Hero } from "../../components/Hero/Hero";
import { Pricing } from "../../components/Pricing/Pricing";
import { Security } from "../../components/Security/Security";

export const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Cta />
    </div>
  );
};
