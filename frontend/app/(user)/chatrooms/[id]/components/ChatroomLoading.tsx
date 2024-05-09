"use client";

import { useRouter } from "next/navigation";
import VibeLoading from "@/app/(user)/components/VibeLoading";
import Button from "@/components/Button";

const ChatroomLoading = () => {
  const router = useRouter();

  return (
    <div className="absolute z-10 w-full h-full bg-white/70 backdrop-blur-md flex flex-col gap-8 items-center justify-center">
      <VibeLoading size={164} />
      <div className="text-center space-y-2">
        <h4>Please wait, the chat room is loading...</h4>
        <p className="text-sm">
          If it&apos;s stuck, try{" "}
          <Button
            variant="link"
            className="inline-flex !p-0"
            onClick={() => router.refresh()}
          >
            reloading the page
          </Button>
          .
        </p>
      </div>
    </div>
  );
};

export default ChatroomLoading;
