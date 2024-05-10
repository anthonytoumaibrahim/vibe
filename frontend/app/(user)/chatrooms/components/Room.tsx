import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";

interface RoomProps {
  id: number;
  name: string;
  username: string;
  participants_count: number;
}

const Room = ({ id, name, username, participants_count = 0 }: RoomProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-900">
      <div className="h-44 relative">
        <Image src="/images/chatrooms/bg1.webp" fill sizes="480px" alt="" />
        <p className="text-white absolute top-4 right-4 flex items-center gap-2">
          <FaUserGroup size={24} /> {participants_count}
        </p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="space-y-2">
          <h3>{name}</h3>
          <p>
            Created by{" "}
            <Link href={`/profile/${username}`} className="font-bold">
              {username}
            </Link>
          </p>
        </div>
        <Button href={`/chatrooms/${id}`}>Join</Button>
      </div>
    </div>
  );
};

export default Room;
