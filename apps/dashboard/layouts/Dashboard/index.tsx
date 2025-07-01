"use client";

import { Header } from "@repo/ui/molecules";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import {
  INDIVIDUAL_NAV_LINKS,
  BUSINESS_NAV_LINKS,
  BUSINESS_HOME_TAB_PATHS,
  INDIVIDUAL_HOME_TAB_PATHS,
} from "../../constants/navigation";
import { useNotifications } from "../../hooks/useNotifications";
import { useProfileMenu } from "../../hooks/useProfileMenu";
import { ContentArea } from "./ContentArea";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileNav } from "./MobileNav";
import { NotificationsDrawer } from "./NotificationsDrawer";
import { HeaderActions } from "./HeaderActions";
import { Button } from "@repo/ui/atoms";
import { useAuth } from "../../contexts/AuthContext";
import { PROFILE_OPTIONS } from "../../constants/profile";

const DashboardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();
  const { user, switchedAccountType } = useAuth();

  const {
    items: notifications,
    clearAll,
    dismiss,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useNotifications();

  const { selected: selectedProfile, onChange: handleProfileChange } =
    useProfileMenu();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((open) => !open);
  }, [setIsSidebarOpen]);

  const headerDropdownOptions = useMemo(() => {
    // if (user?.customerType !== "individual") {
    //   return PROFILE_OPTIONS.filter((opt) => opt.value !== "switch-account");
    // }
    return PROFILE_OPTIONS;
  }, [user?.customerType]);

  const sidebarLinks = useMemo(() => {
    const links =
      switchedAccountType === "individual"
        ? INDIVIDUAL_NAV_LINKS
        : BUSINESS_NAV_LINKS;

    return links.map((link) => {
      const { href } = link;
      let active = false;

      if (href === "/") {
        const homePaths =
          switchedAccountType === "individual"
            ? INDIVIDUAL_HOME_TAB_PATHS
            : BUSINESS_HOME_TAB_PATHS;

        active = homePaths.some(
          (p) => pathname === p || pathname.startsWith(p + "/"),
        );
      } else {
        active = pathname === href || pathname.startsWith(href + "/");
      }

      return { ...link, active };
    });
  }, [pathname, switchedAccountType]);

  const activeLink = useMemo(() => {
    const actives = sidebarLinks.filter((l) => l.active);
    if (actives.length === 0) return undefined;
    return actives.reduce((best, cur) =>
      cur.href.length > best.href.length ? cur : best,
    );
  }, [sidebarLinks]);

  const headerTitle =
    activeLink?.label ??
    (switchedAccountType === "individual" ? "Dashboard" : "Business");

  return (
    <main className="min-h-screen flex flex-col relative pb-16">
      <Header
        title={headerTitle}
        profile
        className="bg-white fixed top-0 z-50 w-full"
        button={
          switchedAccountType === "individual" ? (
            <Button
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex font-medium"
              onClick={() => {
                console.log("Buy Crypto");
              }}
            >
              Buy Crypto
            </Button>
          ) : (
            <></>
          )
        }
        container={
          <HeaderActions
            selected={selectedProfile}
            onChange={handleProfileChange}
            onNotificationClick={toggleSidebar}
            isBusinessSwitched={switchedAccountType === "business"}
            menuOptions={headerDropdownOptions}
          />
        }
      />

      <div className="block lg:flex flex-1 min-h-0 relative">
        <DesktopSidebar links={sidebarLinks} />
        <ContentArea>{children}</ContentArea>
      </div>

      <NotificationsDrawer
        open={isSidebarOpen}
        notifications={notifications}
        onClose={toggleSidebar}
        onClearAll={clearAll}
        onDismiss={dismiss}
      />

      <MobileNav links={sidebarLinks} />
    </main>
  );
};

export default DashboardLayout;
