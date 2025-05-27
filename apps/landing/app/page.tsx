import { Button, Typography } from "@repo/ui/atoms";
import {
  DiscordIcon,
  InstagramIcon,
  KaprexWhiteIcon,
  LinkedInIcon,
  PeopleIcon,
  SpeedIcon,
  TiktokIcon,
  TwitterIcon,
  WalletIcon,
} from "@repo/ui/icons";
import Image from "next/image";
import Link from "next/link";
import BenefitBar from "./components/BenefitBar";
import FeatureCard from "./components/FeatureCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import StackingCards from "./components/StackingCards";
import Join from "./components/Join";

const benefits = [
  "No financial constraints",
  "Less paperwork",
  "Faster settlement time",
  "Effortless to use",
  "Lower cost",
  "No hidden fees",
];

export default function Home() {
  return (
    <div className="min-h-screen">
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
            Receive global payments <WalletIcon className="inline w-12 h-12" />
          </Typography>
          <Typography
            variant="h1"
            className="text-4xl lg:text-6xl font-normal mb-2"
          >
            Send faster, <SpeedIcon className="inline w-12 h-12" />
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

      <BenefitBar items={benefits} />

      {/* Dark Section */}
      <section className="bg-black text-white pt-7 md:pt-17">
        <div className="mx-auto px-4">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-56 mb-11">
              <div>
                <Typography
                  variant="body"
                  className="mb-4 text-primary font-nohemi"
                >
                  - About us
                </Typography>
                <Typography variant="h2" className="text-4xl font-normal mb-4">
                  We&apos;re your partner <br /> in financial freedom.
                </Typography>
              </div>
              <div>
                <Typography variant="body" className="text-gray-300 mb-4">
                  At Kaprex, we believe sending, saving, and managing money
                  shouldn&apos;t be slow, expensive, or complicated—especially
                  in Africa. That&apos;s why we created a smarter platform that
                  gives you more control, better rates, and faster access to
                  your money.
                </Typography>
                <Typography variant="body" className="text-gray-300">
                  Whether you&apos;re converting crypto, sending funds across
                  borders, or growing your savings, Kaprex helps you do it
                  all—securely, affordably, and instantly.
                </Typography>
              </div>
            </div>
            <Image
              src="/images/kaprex.svg"
              width={1440}
              height={207}
              sizes="100vw"
              alt="kaprex text image"
            />
          </div>
        </div>
      </section>

      <StackingCards />

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
            <FeatureCard
              title="Best rates for crypto conversions"
              description=""
              graphicSrc="/images/conversion.svg" // Placeholder graphic
              graphicAlt="Crypto Conversion Graphic"
            />
            <FeatureCard
              title="Lightning-fast global transfers"
              description=""
              graphicSrc="/images/fast.svg" // Placeholder graphic
              graphicAlt="Global Transfers Graphic"
            />
            <FeatureCard
              title="Boost your business profits"
              description=""
              graphicSrc="/images/boost.svg" // Placeholder graphic
              graphicAlt="Business Profits Graphic"
            />
            <FeatureCard
              title="Maximize your earnings"
              description=""
              graphicSrc="/images/earnings.svg" // Placeholder graphic
              graphicAlt="Maximize Earnings Graphic"
            />
          </div>
        </div>
      </section>

      <section>
        <picture>
          {/* mobile first */}
          <source
            srcSet="/images/people-mobile.svg"
            media="(max-width: 767px)"
          />
          {/* desktop fallback */}
          <Image
            src="/images/people.svg"
            width={1440}
            height={816}
            sizes="100vw"
            alt="who is it for"
          />
        </picture>
      </section>

      <HowItWorks />

      <FAQ />

      <Join />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div>
          <div className="lg:px-28">
            <div className="flex flex-col gap-8 items-start md:flex-row md:justify-between md:items-center  border-b border-gray-800 pb-8">
              <div className="md:w-[450px]">
                <div className="flex items-center gap-2 mb-4">
                  <KaprexWhiteIcon />
                </div>
                <Typography
                  variant="body"
                  className="text-white text-xs font-light"
                >
                  Kaprex operates solely as a payment orchestration platform and
                  is not licensed as a bank or a digital asset custodian. All
                  regulated financial and custodial services are provided
                  exclusively by our duly authorized and licensed partners.
                </Typography>
              </div>

              <div>
                <ul className="flex gap-4 flex-row md:justify-end">
                  <li>
                    <Link href="/">
                      <TiktokIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <LinkedInIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <DiscordIcon />
                    </Link>
                  </li>
                </ul>

                <ul className="flex gap-6 flex-row mt-7 justify-end text-sm">
                  <li>
                    <Link href="/docs/Kaprex_T&C.pdf" target="_blank">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/Kaprex_privacy_policy.pdf"
                      target="_blank"
                    >
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <Image
              src="/images/kaprex.svg"
              width={1440}
              height={207}
              sizes="100vw"
              alt="kaprex text image"
              className="pt-8"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
