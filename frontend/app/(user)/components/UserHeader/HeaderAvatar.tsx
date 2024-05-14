"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Avatar from "../Avatar";
import ThemeToggler from "./ThemeToggler";
import LogoutButton from "./LogoutButton";

const HeaderAvatar = ({
  username,
  avatar,
  is_premium = false,
}: {
  username: string;
  avatar?: string | undefined | null;
  is_premium?: boolean;
}) => {
  return (
    <Popover className="relative">
      <PopoverButton className="outline-none">
        <Avatar url={avatar ? avatar : null} isPremium={is_premium} />
      </PopoverButton>

      <PopoverPanel className="absolute translate-y-2 top-full left-1/2 -translate-x-1/2 w-max z-50 bg-white dark:bg-black py-4 px-6 rounded-lg shadow-lg flex flex-col gap-2 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-black before:border-r-[8px] before:border-r-transparent">
        <p className="text-center font-bold">{username}</p>
        <ThemeToggler />
        <LogoutButton />
      </PopoverPanel>
    </Popover>
  );
};

export default HeaderAvatar;
