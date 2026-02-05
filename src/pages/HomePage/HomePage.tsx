import { Cta } from "./CTA/CTA";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";
import { Pricing } from "./Pricing/Pricing";
import { Security } from "./Security/Security";

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
