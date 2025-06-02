import { Footer } from "./components/footer/Footer";
import { AudienceSection } from "./components/audience/AudienceSection";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { AboutSection } from "./components/about/AboutSection";
import { HeroSection } from "./components/hero/HeroSection";
import { FAQSection } from "./components/faq/FAQSection";
import { StackingCards } from "./components/stackingCards/StackingCards";
import { BenefitBar } from "./components/benefit/BenefitBar";
import { HowItWorks } from "./components/how/HowItWorks";
import { Join } from "./components/join/Join";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitBar />
      <AboutSection />
      <StackingCards />
      <FeaturesSection />
      <AudienceSection />
      <HowItWorks />
      <FAQSection />
      <Join />
      <Footer />
    </div>
  );
}
