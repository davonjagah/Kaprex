"use client";

import React, { useState } from "react";
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

const NAV_LINKS = [
  { label: "Home", icon: <HouseIcon />, href: "#", active: true },
  { label: "Portfolio", icon: <DashboardWalletIcon />, href: "#" },
  { label: "Earn", icon: <WagesIcon />, href: "#" },
  { label: "Cards", icon: <CreditCardIcon />, href: "#" },
  { label: "Merchant", icon: <BriefcaseIcon />, href: "#" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
        title="Dashboard"
        profile={true}
        className="bg-white fixed top-0 z-10 w-full"
        button={
          <Button
            variant="primary"
            size="sm"
            className="hidden md:inline-flex font-medium"
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

      <div className={`block md:flex flex-1 min-h-0 relative`}>
        <div className="hidden md:block">
          <div
            className={`fixed top-0 left-0 h-full z-5 w-60 pt-[102px] bg-white`}
          >
            <Sidebar links={NAV_LINKS} />
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 md:ml-60 pt-24 pb-10">
          {children}
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

      <nav className="fixed bottom-0 inset-x-0 z-50 bg-white shadow-subtle md:hidden">
        <ul className="flex  gap-5 justify-between items-center h-24 px-5 pb-8 pt-4">
          {NAV_LINKS.map((link) => (
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
