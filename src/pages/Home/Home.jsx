
import Hero from "../../components/Hero/Hero";
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import AboutSection from "../../components/AboutSection/AboutSection";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
// import Expertise from "../../components/Expertise/Expertise";
import Statistics from "../../components/Statistics/Statistics";
import SustainableSection from "../../components/SustainableSection/SustainableSection";
import LatestNews from "../../components/LatestNews/LatestNews";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TrustedBrands />
      <AboutSection />
      <WhatWeDo />
     
      <Statistics />
      <SustainableSection />
      <LatestNews />
    </div>
  );
}
