"use client";

import React, { useMemo, useState } from "react";
import {
  Sidebar,
  SidebarOverlay,
  NotificationSidebar,
  type Notification,
} from "@repo/ui/widgets";
import {
  NotificationIcon,
  ProfileIcon,
  DashboardWalletIcon,
  WagesIcon,
  BriefcaseIcon,
  CreditCardIcon,
  HouseIcon,
} from "@repo/ui/icons";
import { Header } from "@repo/ui/molecules";
import Link from "next/link";
import { Button } from "@repo/ui/atoms";
import { usePathname } from "next/navigation";
import KYCBanner from "../../shared/KYCBanner/KYCBanner";

const NAV_LINKS = [
  { label: "Home", icon: <HouseIcon />, href: "/" },
  { label: "Portfolio", icon: <DashboardWalletIcon />, href: "/portfolio" },
  { label: "Earn", icon: <WagesIcon />, href: "/earn" },
  { label: "Cards", icon: <CreditCardIcon />, href: "/cards" },
  { label: "Merchant", icon: <BriefcaseIcon />, href: "/merchant" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const sidebarLinks = useMemo(() => {
    const computeActive = (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return NAV_LINKS.map((link) => ({
      ...link,
      active: computeActive(link.href),
    }));
  }, [pathname]);

  const activeLink = sidebarLinks.find((link) => link.active);
  const headerTitle = activeLink ? activeLink.label : "Dashboard";

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Transaction Complete",
      message: "Your SOL stake has been processed successfully",
      timestamp: new Date(),
      type: "success" as const,
      action: {
        label: "View Details",
        onClick: () => console.log("View details clicked"),
      },
    },
  ]);

  return (
    <main className="min-h-screen flex flex-col relative pb-16">
      <Header
        title={headerTitle}
        profile={true}
        className="bg-white fixed top-0 z-10 w-full"
        button={
          <Button
            variant="primary"
            size="sm"
            className="hidden lg:inline-flex font-medium"
            onClick={() => setIsOpen(true)}
          >
            Buy Crypto
          </Button>
        }
        container={
          <div className="flex items-center space-x-4">
            <NotificationIcon
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <ProfileIcon className="cursor-pointer text-primary" />
          </div>
        }
      />

      <div className={`block lg:flex flex-1 min-h-0 relative`}>
        <div className="hidden lg:block">
          <div
            className={`fixed top-0 left-0 h-full z-5 w-60 pt-[102px] bg-white`}
          >
            <Sidebar links={sidebarLinks} />
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 lg:ml-60 pt-24 pb-10 ">
          <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
            <KYCBanner />
            {children}
          </div>
        </div>
      </div>

      <SidebarOverlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        widthClass="w-80"
      >
        <NotificationSidebar
          notifications={notifications}
          onClose={() => setIsOpen(false)}
          onClearAll={() => setNotifications([])}
          onDismiss={(id) => {
            setNotifications(notifications.filter((n) => n.id !== id));
          }}
        />
      </SidebarOverlay>

      <nav className="fixed bottom-0 inset-x-0 z-50 bg-white shadow-subtle lg:hidden">
        <ul className="flex gap-5 justify-between md:justify-around items-center h-24 px-5 pb-8 pt-4">
          {sidebarLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex flex-col gap-2 items-center text-xs font-sans ${
                  link.active ? "text-primary font-semibold" : "text-[#7C7B80]"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default DashboardLayout;
