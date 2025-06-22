"use client";

import { Header } from "@repo/ui/molecules";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { NAV_LINKS, HOME_TAB_PATHS } from "../../constants/navigation";
import { useNotifications } from "../../hooks/useNotifications";
import { useProfileMenu } from "../../hooks/useProfileMenu";
import { ContentArea } from "./ContentArea";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileNav } from "./MobileNav";
import { NotificationsDrawer } from "./NotificationsDrawer";
import { HeaderActions } from "./HeaderActions";
import { Button } from "@repo/ui/atoms";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

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

  const sidebarLinks = useMemo(
    () =>
      NAV_LINKS.map((link) => {
        const active =
          link.href === "/"
            ? HOME_TAB_PATHS.includes(pathname)
            : pathname.startsWith(link.href);
        return { ...link, active };
      }),
    [pathname],
  );

  const activeLink = sidebarLinks.find((l) => l.active);

  const headerTitle = activeLink?.label ?? "Dashboard";

  return (
    <main className="min-h-screen flex flex-col relative pb-16">
      <Header
        title={headerTitle}
        profile
        className="bg-white fixed top-0 z-50 w-full"
        button={
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
        }
        container={
          <HeaderActions
            selected={selectedProfile}
            onChange={handleProfileChange}
            onNotificationClick={toggleSidebar}
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
