import Button from "@/components/Button";
import Link from "next/link";

interface RoomProps {
  id: number;
  name: string;
  username: string;
}

const Room = ({ id, name, username }: RoomProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-200">
      <div className="h-44 bg-slate-500"></div>
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
