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

      <PopoverPanel
        anchor="bottom"
        className="absolute translate-y-2 w-max z-50 bg-white dark:bg-black py-4 px-6 rounded-lg shadow-lg flex flex-col gap-2"
      >
        <p className="text-center font-bold">{username}</p>
        <ThemeToggler />
        <LogoutButton />
      </PopoverPanel>
    </Popover>
  );
};

export default HeaderAvatar;
