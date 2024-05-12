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

const NavLink = ({
  href,
  children,
  icon: NavLinkIcon = FaQuestion,
}: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex items-center py-3 px-6 unstyled-link gap-4 text-lg rounded-lg ${
        pathname === href
          ? "bg-slate-300 dark:bg-primary-main"
          : "hover:bg-slate-200 dark:hover:bg-slate-600"
      }`}
    >
      <NavLinkIcon />
      {children}
    </Link>
  );
};

export default NavLink;
