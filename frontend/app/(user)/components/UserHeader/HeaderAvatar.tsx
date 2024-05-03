"use client";

import { logout } from "../../actions";
import { Popover } from "@headlessui/react";
import Avatar from "../Avatar";
import Button from "@/components/Button";
import ThemeToggler from "./ThemeToggler";

const HeaderAvatar = ({ avatar }: { avatar?: string | undefined | null }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">
        <Avatar url={avatar ? avatar : null} />
      </Popover.Button>

      <Popover.Panel className="absolute top-full z-50 bg-white dark:bg-slate-900 py-4 px-6 rounded-lg shadow-lg -left-[80px] translate-x-[40px] w-[160px] flex flex-col gap-2">
        <ThemeToggler />
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Popover.Panel>
    </Popover>
  );
};

export default HeaderAvatar;
