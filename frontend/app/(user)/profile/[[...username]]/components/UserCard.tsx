"use client";

import Avatar from "@/app/(user)/components/Avatar";
import Button from "@/components/Button";
import { useState } from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";
import { sendFriendRequest } from "../actions";
import toast from "react-hot-toast";

interface UserCardProps {
  avatar?: string | null;
  username: string;
  isFriend?: boolean;
  isOwner?: boolean;
  id: number;
  isPremium?: boolean;
}

const UserCard = ({
  avatar = null,
  username,
  id,
  isFriend = false,
  isOwner = false,
  isPremium = false,
}: UserCardProps) => {
  const [friend, setFriend] = useState(isFriend);

  const addFriend = async () => {
    const response = await sendFriendRequest(id);
    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message ?? "Sorry, couldn't send your request");
    }
  };

  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-black">
      <div className="flex items-center gap-4">
        <Avatar url={avatar} isPremium={isPremium} />
        <div>
          <h4>{username}</h4>
          <p>Online</p>
        </div>
        {!isOwner && (
          <Button
            icon={friend ? FaUserMinus : FaUserPlus}
            variant="link"
            size="small"
            onClick={() => addFriend()}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
