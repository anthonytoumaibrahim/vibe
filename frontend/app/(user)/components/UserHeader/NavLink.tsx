"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const NavLink = ({ href = "", className = "", children }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`xl:text-lg tracking-widest !text-black ${
        pathname === href ? "font-bold" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
