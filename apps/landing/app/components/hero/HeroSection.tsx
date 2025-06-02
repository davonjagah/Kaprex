import { Button, Typography } from "@repo/ui/atoms";
import { PeopleIcon, SpeedIcon, WalletIcon } from "@repo/ui/icons";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-10">
      <div className="w-80 h-14 rounded-full border-gray-secondary mx-auto items-center gap-4 justify-center mb-4 border overflow-hidden relative">
        <div className="h-full animate-slide justify-center items-center">
          <div className="h-14 flex items-center justify-center">
            <Typography variant="body" className="font-nohemi">
              Trusted by
            </Typography>
            <PeopleIcon className="ml-2" />
          </div>
          <div className="h-14 flex items-center justify-center gap-1">
            <Typography variant="body" className="font-nohemi">
              Processed over
            </Typography>
            <span className="text-[10.58px] flex flex-row justify-center items-center h-8 w-8 bg-primary text-white rounded-full font-semibold font-nohemi">
              1k+
            </span>
            <Typography variant="body" className="font-nohemi">
              transactions
            </Typography>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl font-normal mb-2"
        >
          Receive global payments{" "}
          <WalletIcon className="inline h-9 w-9 md:w-12 md:h-12" />
        </Typography>
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl font-normal mb-2"
        >
          Send faster, <SpeedIcon className="inline h-9 w-9  md:w-12 md:h-12" />
        </Typography>
        <Typography variant="h1" className="text-4xl lg:text-6xl font-normal">
          Earn better with Kaprex
        </Typography>
      </div>

      <Typography
        variant="lead"
        className="text-center mt-2 text-base md:text-[22px] text-[#5C5C5C] px-7"
      >
        Stablecoin rails for seamless payments, high yields & minimal fees
      </Typography>

      <div className="max-w-3xl mx-auto text-center mt-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#join">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-semibold"
            >
              Get started now
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              size="md"
              className="w-full sm:w-auto font-semibold border-[#0C0C0C] text-[#0C0C0C]"
            >
              See how we work
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/images/landingBg.svg"
        width={1347}
        height={773}
        alt="landing image"
        priority
        quality={80}
      />
    </section>
  );
}
