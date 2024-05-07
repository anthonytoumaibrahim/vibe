"use client";

import { Popover } from "@headlessui/react";
import Avatar from "../Avatar";
import ThemeToggler from "./ThemeToggler";
import LogoutButton from "./LogoutButton";

const HeaderAvatar = ({ avatar }: { avatar?: string | undefined | null }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">
        <Avatar url={avatar ? avatar : null} />
      </Popover.Button>

      <Popover.Panel className="absolute translate-y-2 top-full left-1/2 -translate-x-1/2 w-max z-50 bg-white dark:bg-black py-4 px-6 rounded-lg shadow-lg flex flex-col gap-2 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-black before:border-r-[8px] before:border-r-transparent">
        <ThemeToggler />
        <LogoutButton />
      </Popover.Panel>
    </Popover>
  );
};

export default HeaderAvatar;
