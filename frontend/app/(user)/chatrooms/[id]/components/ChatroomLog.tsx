"use client";

import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Avatar from "@/app/(user)/components/Avatar";
import TimeAgo from "react-timeago";

export interface ChatroomLogProps {
  messages: Array<{
    id: number;
    message: string;
    user_id: number;
    chatroom_id: number;
    time_ago: string;
    created_at: string;
    user: {
      id: number;
      username: string;
      avatar_full: string | null;
      is_premium: boolean;
      is_friend: boolean;
      is_owner: boolean;
      is_admin: boolean;
    };
  }>;
}

const ChatroomLog = ({ messages }: ChatroomLogProps) => {
  const [logOpen, setLogOpen] = useState(false);

  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.lastElementChild?.scrollIntoView();
  }, [messages, logOpen]);

  return (
    <div className="absolute right-0 top-0 h-full flex items-center justify-center gap-2">
      <button onClick={() => setLogOpen(!logOpen)} className="text-white">
        {logOpen ? <FaChevronRight size={24} /> : <FaChevronLeft size={24} />}
      </button>
      <Transition
        show={logOpen}
        enter="transition-transform duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-150"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          className="bg-white dark:bg-slate-900 h-full w-[280px] max-w-xs shadow-2xl overflow-auto"
          ref={logRef}
        >
          {messages?.length === 0 && (
            <p className="text-center p-4">No messages to show.</p>
          )}
          {messages?.map((msg) => {
            const { id, message, user, time_ago, created_at } = msg;
            return (
              <div key={id} className="flex flex-col gap-2 p-4">
                <div className="flex w-full gap-2 items-center">
                  <Avatar size={32} url={user?.avatar_full} />
                  <p className="font-bold">{user?.username}</p>
                  <p className="text-slate-400 ml-auto text-sm">
                    <TimeAgo date={created_at} />
                  </p>
                </div>
                <p>{message}</p>
              </div>
            );
          })}
        </div>
      </Transition>
    </div>
  );
};

export default ChatroomLog;
