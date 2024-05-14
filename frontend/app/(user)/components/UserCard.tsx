"use client";

import { useState } from "react";
import {
  sendFriendRequest,
  unfriend,
} from "../profile/[[...username]]/actions";
import Avatar from "@/app/(user)/components/Avatar";
import Button from "@/components/Button";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";
import toast from "react-hot-toast";
import Link from "next/link";

interface UserCardProps {
  avatar?: string | null;
  avatarSize?: number;
  username: string;
  isFriend?: boolean;
  isOwner?: boolean;
  id: number;
  isPremium?: boolean;
  isAdmin?: boolean;
}

const UserCard = ({
  avatar = null,
  avatarSize = 56,
  username,
  id,
  isFriend = false,
  isOwner = false,
  isPremium = false,
  isAdmin = false,
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

  const deleteFriend = async () => {
    const response = await unfriend(id);
    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message ?? "Sorry, couldn't send your request");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/profile/${username}`}
        className="flex items-center gap-4 unstyled-link w-full flex-grow-1"
      >
        <Avatar url={avatar} isPremium={isPremium} size={avatarSize} />
        <div>
          <p className="xl:text-xl">{username}</p>
          {isAdmin && (
            <span className="bg-primary-main text-white rounded-md px-2 py-1 text-sm flex">
              Admin
            </span>
          )}
        </div>
      </Link>
      {!isOwner && (
        <Button
          icon={friend ? FaUserMinus : FaUserPlus}
          variant="link"
          size="small"
          onClick={() => (friend ? deleteFriend() : addFriend())}
          className="inline-flex ml-auto !p-0"
        ></Button>
      )}
    </div>
  );
};

export default UserCard;
