import Link from "next/link";
import React from "react";

export interface SidebarLink {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  logo?: React.ReactNode;
  links: SidebarLink[];
  footer?: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ links, footer, className = "" }) => {
  return (
    <aside
      className={`min-h-screen bg-white border-r border-gray-100 flex flex-col py-6 px-16 gap-2 ${className}`}
    >
      <nav className="flex flex-col gap-7 text-gray-700 flex-1">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-4 transition-colors text-base font-sans ${
              item.active
                ? "text-primary font-semibold"
                : "hover:text-primary text-[#7C7B80]"
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      {footer && <div className="mt-auto pt-4">{footer}</div>}
    </aside>
  );
};

export default Sidebar;
