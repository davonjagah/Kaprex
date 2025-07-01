import { Sidebar } from "@repo/ui/widgets";
import {
  INDIVIDUAL_NAV_LINKS,
  BUSINESS_NAV_LINKS,
} from "../../constants/navigation";
import { SIDEBAR_WIDTH_CLASS } from "../../constants/layout";

export const DesktopSidebar: React.FC<{
  links: (typeof INDIVIDUAL_NAV_LINKS | typeof BUSINESS_NAV_LINKS) &
    {
      active: boolean;
    }[];
}> = ({ links }) => (
  <aside className="hidden lg:block">
    <div
      className={`fixed top-0 left-0 h-full z-10 ${SIDEBAR_WIDTH_CLASS} bg-white pt-[102px]`}
    >
      <Sidebar links={links} />
    </div>
  </aside>
);
