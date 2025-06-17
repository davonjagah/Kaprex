import { Typography } from "@repo/ui/atoms";
import {
  DiscordIcon,
  InstagramIcon,
  KaprexWhiteIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "@repo/ui/icons";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kaprexhq",
    icon: TiktokIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/kaprexhq/",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kaprexhq",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    href: "https://x.com/kaprexhq",
    icon: TwitterIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/kaprex",
    icon: DiscordIcon,
  },
];

export function Footer() {
  return (
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
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex gap-6 flex-row mt-7 justify-end text-sm">
                <li>
                  <Link href="/docs/Kaprex_T&C.pdf" target="_blank">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/docs/Kaprex_privacy_policy.pdf" target="_blank">
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
  );
}
