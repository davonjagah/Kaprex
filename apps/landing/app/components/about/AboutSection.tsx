import { Typography } from "@repo/ui/atoms";
import Image from "next/image";

export function AboutSection() {
  return (
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
                shouldn&apos;t be slow, expensive, or complicated—especially in
                Africa. That&apos;s why we created a smarter platform that gives
                you more control, better rates, and faster access to your money.
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
  );
}
