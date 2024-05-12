"use client";

import NavLink from "./NavLink";
import { MdMonitor } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col gap-4">
      <NavLink href="/admin" icon={MdMonitor}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Nav;
