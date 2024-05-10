"use client";

import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Avatar from "../Avatar";
import Link from "next/link";
import { FaUserGroup, FaCheck, FaTrash } from "react-icons/fa6";
import { handleFriendRequest } from "../../actions";

interface FriendRequestsProps {
  requests: Array<{
    id: number;
    username: string;
    country?: string;
    avatar_full: string;
    is_premium: boolean;
  }>;
}

const FriendRequests = ({ requests }: FriendRequestsProps) => {
  const [allRequests, setAllRequests] = useState(requests);

  const handleRequest = async (id: number, accepted: boolean) => {
    const newRequests = allRequests.filter((fr) => fr.id !== id);
    setAllRequests(newRequests);
    const response = await handleFriendRequest(id, accepted);
  };

  return (
    <Popover className="relative flex">
      <PopoverButton className="outline-none hover:text-primary-main relative">
        <FaUserGroup size={24} />
        {allRequests?.length > 0 && (
          <span className="w-2 h-2 rounded-full bg-red-600 absolute -top-1 -right-1"></span>
        )}
      </PopoverButton>

      <PopoverPanel className="absolute translate-y-2 top-full min-w-[320px] left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-black py-4 px-6 rounded-lg shadow-lg flex flex-col gap-2 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-black before:border-r-[8px] before:border-r-transparent">
        <h4 className="text-center">Friend Requests</h4>
        {allRequests?.length === 0 && (
          <p className="text-center text-sm text-slate-400">
            You have no friend requests at this time.
          </p>
        )}
        {allRequests?.map((fr) => {
          const { id, avatar_full, is_premium, username } = fr;
          return (
            <div key={id} className="flex items-center justify-between gap-2">
              <Link
                href={`/profile/${username}`}
                className="unstyled-link flex items-center gap-2"
              >
                <Avatar url={avatar_full} size={32} isPremium={is_premium} />
                <p>{username}</p>
              </Link>
              <div className="flex items-center gap-4">
                <button
                  className="text-red-600"
                  onClick={() => handleRequest(id, false)}
                >
                  <FaTrash size={20} />
                </button>
                <button
                  className="text-green-600"
                  onClick={() => handleRequest(id, true)}
                >
                  <FaCheck size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </PopoverPanel>
    </Popover>
  );
};

export default FriendRequests;
