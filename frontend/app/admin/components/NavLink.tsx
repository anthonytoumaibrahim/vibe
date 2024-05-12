"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa6";

interface NavLinkProps {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}

const NavLink = ({ href, children, icon: NavLinkIcon = FaQuestion }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex items-center justify-center py-4 unstyled-link gap-4 text-lg rounded-lg ${
        pathname === href ? "bg-slate-300" : "hover:bg-slate-200"
      }`}
    >
      <NavLinkIcon />
      {children}
    </Link>
  );
};

export default NavLink;