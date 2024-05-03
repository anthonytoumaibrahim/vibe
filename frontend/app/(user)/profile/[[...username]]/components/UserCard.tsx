"use client";

import Avatar from "@/app/(user)/components/Avatar";
import Button from "@/components/Button";
import { useState } from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";

interface UserCardProps {
  avatar?: string | null;
  username: string;
  isFriend?: boolean;
  isOwner?: boolean;
}

const UserCard = ({
  avatar = null,
  username,
  isFriend = false,
  isOwner = false,
}: UserCardProps) => {
  const [friend, setFriend] = useState(isFriend);

  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-black">
      <div className="flex items-center gap-4">
        <Avatar url={avatar} />
        <div>
          <h4>{username}</h4>
          <p>Online</p>
        </div>
        {!isOwner && (
          <Button
            icon={friend ? FaUserMinus : FaUserPlus}
            variant="link"
            size="small"
          ></Button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
