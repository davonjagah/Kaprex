import React from "react";

interface OverlayProps {
  open: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  open,
  onClick,
  className = "",
  children,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${className}`}
      onClick={onClick}
      aria-hidden={!open}
      aria-label="Overlay"
    >
      {children}
    </div>
  );
};

export default Overlay;
