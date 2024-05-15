"use client";

import { FaStripe } from "react-icons/fa6";
import NavLink from "./NavLink";
import { MdFlag, MdMonitor, MdPerson, MdSync } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col gap-4">
      <NavLink href="/admin" icon={MdMonitor}>
        Dashboard
      </NavLink>
      <NavLink href="/admin/users" icon={MdPerson}>
        Users
      </NavLink>
      <NavLink href="/admin/reports" icon={MdFlag}>
        Reports
      </NavLink>
      <NavLink href="/admin/generator" icon={MdSync}>
        Generator
      </NavLink>
      <NavLink
        href="https://dashboard.stripe.com/"
        target="_blank"
        icon={FaStripe}
      >
        Payments
      </NavLink>
    </nav>
  );
};

export default Nav;
