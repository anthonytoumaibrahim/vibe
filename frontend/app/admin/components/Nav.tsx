"use client";

import NavLink from "./NavLink";
import { MdMonitor, MdPerson } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col gap-4">
      <NavLink href="/admin" icon={MdMonitor}>
        Dashboard
      </NavLink>
      <NavLink href="/admin/users" icon={MdPerson}>
        Users
      </NavLink>
    </nav>
  );
};

export default Nav;
