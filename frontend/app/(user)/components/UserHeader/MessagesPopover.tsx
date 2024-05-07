"use client";

import { Popover } from "@headlessui/react";
import { FaMessage } from "react-icons/fa6";

// import Pusher from "pusher-js";
// if (typeof window !== "undefined") {
//   window.Pusher = Pusher;
// }
// import Echo from "laravel-echo";

const MessagesPopover = () => {
  // const chat = new Echo({
  //   broadcaster: "pusher",
  //   key: "1015fd935276a6a14082",
  //   cluster: "ap1",
  //   forceTLS: true,
  //   authEndPoint: "",
  // });

  // const channel = chat.channel("my-channel");
  // channel.listen(".my-event", function (data) {
  //   alert(JSON.stringify(data));
  // });

  return (
    <Popover className="relative flex">
      <Popover.Button className="outline-none hover:text-primary-main">
        <FaMessage size={24} />
      </Popover.Button>

      <Popover.Panel className="absolute translate-y-2 top-full left-1/2 -translate-x-1/2 w-max z-50 bg-white dark:bg-black py-4 px-6 rounded-lg shadow-lg flex flex-col gap-2 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-black before:border-r-[8px] before:border-r-transparent">
        Messages go here
      </Popover.Panel>
    </Popover>
  );
};

export default MessagesPopover;
