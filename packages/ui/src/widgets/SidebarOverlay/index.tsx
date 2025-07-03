import React from "react";
import { Overlay } from "@repo/ui/atoms";

interface SidebarOverlayProps {
  sidebar: React.ReactNode;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right";
  widthClass?: string; // e.g. w-56, w-64
  className?: string;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({
  sidebar,
  open,
  onClose,
  children,
  position = "right",
  widthClass = "w-56",
  className = "",
}) => {
  const sideClass = position === "left" ? "left-0" : "right-0";
  const translateClass =
    position === "left"
      ? open
        ? "translate-x-0"
        : "-translate-x-full"
      : open
        ? "translate-x-0"
        : "translate-x-full";

  return (
    <div className={`flex flex-1 min-h-0 relative ${className}`}>
      <Overlay open={open} onClick={onClose} className="md:hidden">
        <div
          className={`bg-white ${widthClass} min-h-full shadow-lg fixed top-0 h-full transition-transform duration-300 transform ${sideClass} ${translateClass} pointer-events-auto`}
          style={{ willChange: "transform" }}
          onClick={(e) => e.stopPropagation()}
        >
          {sidebar}
        </div>
      </Overlay>
      {/* Desktop sidebar (always visible, fixed) */}
      <div className="hidden md:block">
        <div className={`fixed top-0 left-0 h-screen ${widthClass} z-30`}>
          {sidebar}
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0 md:ml-56">{children}</div>
    </div>
  );
};

export default SidebarOverlay;
