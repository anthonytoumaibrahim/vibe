import Button from "@/components/Button";
import HelpTooltip from "@/components/HelpTooltip";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaUserGroup } from "react-icons/fa6";

interface RoomProps {
  id: number;
  name: string;
  username: string;
  participants_count: number;
  background: string;
  is_private?: boolean;
  is_friend?: boolean;
  expires_in?: string;
  is_host?: boolean;
}

const Room = ({
  id,
  name,
  username,
  participants_count = 0,
  background,
  is_private = false,
  is_friend = false,
  expires_in,
  is_host = false,
}: RoomProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-900">
      <div className="h-44 relative">
        <Image
          src={`/images/2d_backgrounds/${background}`}
          width={464}
          height={176}
          alt=""
          className="object-cover w-full h-full"
        />
        <p className="text-white absolute top-4 right-4 flex items-center gap-2">
          <FaUserGroup size={24} /> {participants_count}
        </p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="space-y-2 grow-0 truncate">
          <h4 className="flex items-center gap-2">
            {is_private ? (
              <HelpTooltip icon={FaLock} size={20}>
                This chat room is only available to {username}&apos;s friends.
              </HelpTooltip>
            ) : (
              ""
            )}
            {name}
          </h4>
          <p>
            Created by{" "}
            <Link href={`/profile/${username}`} className="font-bold">
              {username}
            </Link>
          </p>
        </div>
        {(is_private && is_friend) || is_host || !is_private ? (
          <Button href={`/chatrooms/${id}`}>Join</Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Room;
