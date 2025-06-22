import { Sidebar } from "@repo/ui/widgets";
import { NAV_LINKS } from "../../constants/navigation";
import { SIDEBAR_WIDTH_CLASS, HEADER_CLASS } from "../../constants/layout";

export const DesktopSidebar: React.FC<{
  links: typeof NAV_LINKS & { active: boolean }[];
}> = ({ links }) => (
  <aside className="hidden lg:block">
    <div
      className={`fixed top-0 left-0 h-full z-10 ${SIDEBAR_WIDTH_CLASS} ${HEADER_CLASS} bg-white`}
    >
      <Sidebar links={links} />
    </div>
  </aside>
);
