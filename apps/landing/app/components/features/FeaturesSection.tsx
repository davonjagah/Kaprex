import { Typography } from "@repo/ui/atoms";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Best rates for \ncrypto conversions",
    description: "",
    graphicSrc: "/images/conversion.svg",
    graphicAlt: "Crypto Conversion Graphic",
  },
  {
    title: "Lightning-fast \nglobal transfers",
    description: "",
    graphicSrc: "/images/fast.svg",
    graphicAlt: "Global Transfers Graphic",
  },
  {
    title: "Boost your \nbusiness profits",
    description: "",
    graphicSrc: "/images/boost.svg",
    graphicAlt: "Business Profits Graphic",
  },
  {
    title: "Maximize \nyour earnings",
    description: "",
    graphicSrc: "/images/earnings.svg",
    graphicAlt: "Maximize Earnings Graphic",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <Typography
          variant="body"
          className="text-left md:text-center text-primary font-nohemi mb-2"
        >
          - Why Kaprex?
        </Typography>
        <Typography
          variant="h2"
          className="text-left md:text-center text-4xl font-normal mb-12"
        >
          Earn Better with Kaprex
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              graphicSrc={feature.graphicSrc}
              graphicAlt={feature.graphicAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
