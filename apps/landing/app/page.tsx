import BenefitBar from "./components/BenefitBar";
import { HowItWorks } from "./components/HowItWorks";
import { StackingCards } from "./components/StackingCards";
import Join from "./components/Join";
import { Footer } from "./components/footer/Footer";
import { AudienceSection } from "./components/audience/AudienceSection";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { AboutSection } from "./components/about/AboutSection";
import { HeroSection } from "./components/hero/HeroSection";
import { FAQSection } from "./components/faq/FAQSection";

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
