import {
  HouseIcon,
  DashboardWalletIcon,
  WagesIcon,
  CreditCardIcon,
  BriefcaseIcon,
} from "@repo/ui/icons";
import { ComponentType, SVGProps } from "react";

export interface NavLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", icon: HouseIcon, href: "/" },
  { label: "Portfolio", icon: DashboardWalletIcon, href: "/portfolio" },
  { label: "Earn", icon: WagesIcon, href: "/earn" },
  { label: "Cards", icon: CreditCardIcon, href: "/cards" },
  { label: "Merchant", icon: BriefcaseIcon, href: "/merchant" },
];

export const HOME_TAB_PATHS = [
  "/",
  "/transactions/fund",
  "/transactions/pay",
  "/transactions/buy-crypto",
  "/transactions/sell-crypto",
];
