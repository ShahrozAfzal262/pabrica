import Hero2 from "../../components/Hero2/Hero2";
import AboutSection from "../../components/AboutSection/AboutSection";
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Statistics from "../../components/Statistics/Statistics";
// Jab ye components ban jayen to neeche ke comment hata kar import karo:
import LatestProjects from "../../components/LatestProjects/LatestProjects";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LatestNews from "../../components/LatestNews/LatestNews";
import "./Home2.css";

export default function Home2() {
  return (
    <div className="home2">
      <Hero2 />
      <AboutSection showLead={false} />
      <TrustedBrands />
      <WhatWeDo />
      <LatestProjects />
      <WhyChooseUs />
      <Statistics />
      <LatestNews />
    </div>
  );
}