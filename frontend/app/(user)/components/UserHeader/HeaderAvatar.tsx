"use client";

import { Popover } from "@headlessui/react";
import Avatar from "../Avatar";
import Button from "@/components/Button";
import { logout } from "../../actions";

const HeaderAvatar = ({ avatar }: { avatar?: string | undefined | null }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">
        <Avatar url={avatar ? avatar : null} />
      </Popover.Button>

      <Popover.Panel className="absolute -left-1/2 top-full z-50 bg-white p-4 rounded-lg shadow-lg">
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
