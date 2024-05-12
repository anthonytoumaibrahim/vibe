"use client";

import { MdMonitor } from "react-icons/md";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="w-full">
      <NavLink href="/admin" icon={MdMonitor}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Nav;
