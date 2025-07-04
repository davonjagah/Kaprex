import { Minus, ShoppingCart, Tag } from "lucide-react";
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

export const INDIVIDUAL_NAV_LINKS: NavLink[] = [
  { label: "Home", icon: HouseIcon, href: "/" },
  { label: "Portfolio", icon: DashboardWalletIcon, href: "/portfolio" },
  { label: "Earn", icon: WagesIcon, href: "/earn" },
  { label: "Cards", icon: CreditCardIcon, href: "/cards" },
  { label: "Merchant", icon: BriefcaseIcon, href: "/merchant" },
];
export const BUSINESS_NAV_LINKS: NavLink[] = [
  { label: "Business", icon: HouseIcon, href: "/" },
  { label: "Transact", icon: Minus, href: "/transactions/pay" },
  {
    label: "Treasury",
    icon: ShoppingCart,
    href: "/treasury",
  },
];

export const INDIVIDUAL_HOME_TAB_PATHS = [
  "/",
  "/transactions/fund",
  "/transactions/pay",
  "/transactions/buy-crypto",
  "/transactions/sell-crypto",
];

export const BUSINESS_HOME_TAB_PATHS = ["/"];

const COMMON_TRANSACTION_TABS = [
  { label: "Pay", value: "pay", href: "/transactions/pay" },
  {
    label: "Buy Crypto",
    value: "buy-crypto",
    href: "/transactions/buy-crypto",
  },
  {
    label: "Sell Crypto",
    value: "sell-crypto",
    href: "/transactions/sell-crypto",
  },
];

export const INDIVIDUAL_TRANSACTION_TABS = [
  { label: "Fund", value: "fund", href: "/transactions/fund" },
  ...COMMON_TRANSACTION_TABS,
];

export const BUSINESS_TRANSACTION_TABS = [...COMMON_TRANSACTION_TABS];
