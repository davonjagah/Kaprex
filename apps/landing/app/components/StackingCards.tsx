import { Button, Typography } from "@repo/ui/atoms";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

export default function StackingCards() {
  const cards = [
    {
      title: "Send and receive money globally via stablecoin rails",
      src: "/images/receive.svg",
    },
    {
      title:
        "Grow your funds with seamless access to stablecoin yield and staking rewards.",
      src: "/images/grow-funds.svg",
    },
    {
      title: "Receive global payments for your business",
      src: "/images/receive-payment.svg",
    },
    {
      title: "Pay with stablecoins using our card",
      src: "/images/cards.svg",
    },
  ];

  return (
    <section className="min-h-screen bg-black pl-8 pt-8 pr-8 md:pr-0">
      <div className="flex flex-col md:flex-row justify-between md:gap-20 lg:pl-24">
        <div className="space-y-6 relative">
          {cards.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description=""
              graphicSrc={item.src}
              graphicAlt={item.title}
              className={`sticky z-[${10 + index}] text-white max-w-[594px] px-5 md:px-14 `}
              style={{ top: `${index * 64}px` }}
            />
          ))}
        </div>
        <div className="space-y-6 relative">
          <div className="sticky z-[9] top-0 right-0">
            <Image
              src="/images/globe.svg"
              width={535}
              height={453}
              alt="landing image"
              priority
              style={{
                height: "453px",
                width: "100%",
              }}
            />
            <div
              className={`bg-black py-8 px-5 rounded-2xl rounded-tr-none rounded-br-none flex flex-col justify-between border-[0.5px] border-r-0  border-white md:relative text-white w-[331px] md:w-[350px] absolute top-20 md:top-0`}
            >
              <div className="mx-auto md:mx-0 w-[173px] text-center md:text-left">
                <Typography
                  variant="h3"
                  className="font-normal mb-2 text-white"
                >
                  Get started with Kaprex!
                </Typography>
                <Typography variant="body" className="text-gray-300">
                  In just a few clicks...
                </Typography>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto font-semibold mt-6"
                >
                  Get started now
                </Button>
              </div>
              <div
                className="absolute h-[102%] top-[-1%] w-[331px] md:w-[350px] right-[-1px] rounded-xl hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
