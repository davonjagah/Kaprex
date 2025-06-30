import Link from "next/link";
import { NAV_LINKS } from "../../constants/navigation";
import { MOBILE_NAV_CLASS } from "../../constants/layout";

export const MobileNav: React.FC<{
  links: typeof NAV_LINKS & { active: boolean }[];
}> = ({ links }) => (
  <nav
    className={`fixed bottom-0 inset-x-0 z-50 bg-white shadow-subtle lg:hidden ${MOBILE_NAV_CLASS}`}
  >
    <ul className="flex gap-5 justify-between md:justify-around items-center h-24 px-5 pb-8 pt-4">
      {links.map(({ href, icon: Icon, label, active }) => (
        <li key={label}>
          <Link
            href={href}
            className={`flex flex-col gap-2 items-center text-xs font-sans ${
              active ? "text-primary font-semibold" : "text-[#7C7B80]"
            }`}
          >
            <Icon />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
