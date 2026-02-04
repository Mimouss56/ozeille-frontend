import { Cta } from "../../components/CTA/CTA";
import { Features } from "../../components/Features/Features";
import { Hero } from "../../components/Hero/Hero";
import { Pricing } from "../../components/Pricing/Pricing";
import { Security } from "../../components/Security/Security";

export const HomePage = () => {
  return (
    <div className="bg-base-100 text-neutral antialiased">
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Cta />
    </div>
  );
};
