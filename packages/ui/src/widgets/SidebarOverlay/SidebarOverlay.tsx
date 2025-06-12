import React from "react";
import { Overlay } from "@repo/ui/atoms";

interface SidebarOverlayProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  position?: "left" | "right";
  widthClass?: string; // e.g. w-56, w-64
  className?: string;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({
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
    <>
      <Overlay open={open} onClick={onClose} />
      <div
        className={`bg-white ${widthClass} min-h-full shadow-lg fixed top-0 h-full transition-transform duration-300 transform ${sideClass} ${translateClass} pointer-events-auto z-50 ${className}`}
        style={{ willChange: "transform" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default SidebarOverlay;
