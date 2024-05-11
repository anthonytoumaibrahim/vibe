"use client";

import Avatar from "@/app/(user)/components/Avatar";
import Button from "@/components/Button";
import { useState } from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";
import {
  sendFriendRequest,
  unfriend,
} from "../profile/[[...username]]/actions";
import toast from "react-hot-toast";

interface UserCardProps {
  avatar?: string | null;
  avatarSize?: number;
  username: string;
  isFriend?: boolean;
  isOwner?: boolean;
  id: number;
  isPremium?: boolean;
}

const UserCard = ({
  avatar = null,
  avatarSize = 56,
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

  const deleteFriend = async () => {
    const response = await unfriend(id);
    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message ?? "Sorry, couldn't send your request");
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar url={avatar} isPremium={isPremium} size={avatarSize} />
        <div>
          <h4>{username}</h4>
          <p>Online</p>
        </div>
      </div>
      {!isOwner && (
        <Button
          icon={friend ? FaUserMinus : FaUserPlus}
          variant="link"
          size="small"
          onClick={() => (friend ? deleteFriend() : addFriend())}
        ></Button>
      )}
    </div>
  );
};

export default UserCard;
