"use client";

import Logo from "@/components/Logo";
import Nav from "./Nav";
import ThemeToggler from "@/app/(user)/components/UserHeader/ThemeToggler";
import LogoutButton from "@/app/(user)/components/UserHeader/LogoutButton";

const Sidebar = () => {
  return (
    <aside className="w-full min-h-screen max-w-[280px] bg-white dark:bg-slate-950 shadow-lg p-6 flex flex-col items-center gap-10">
      <Logo width={88} className="dark:fill-white" />
      <Nav />
      <div className="mt-auto w-full flex flex-col gap-4">
        <ThemeToggler className="w-full" />
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
