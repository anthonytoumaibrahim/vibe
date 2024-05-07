import Button from "@/components/Button";
import Link from "next/link";

const Room = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-200">
      <div className="h-44 bg-slate-500"></div>
      <div className="p-4 flex justify-between items-center">
        <div className="space-y-2">
          <h3>Chat Room 1</h3>
          <p>
            Created by{" "}
            <Link href="/profile" className="font-bold">
              username123
            </Link>
          </p>
        </div>
        <Button>Join</Button>
      </div>
    </div>
  );
};

export default Room;
