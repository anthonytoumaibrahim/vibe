"use client";

import { useEffect, useRef, useState } from "react";
import { moveAvatar } from "../../actions";
import Draggable from "react-draggable";
import Character from "@/app/(user)/2d_components/Character";

interface ChatroomAvatarProps {
  chatroomId: number;
  userId: number;
  data: any;
  message?: string | undefined;
  x?: number;
  y?: number;
  is_owner: boolean;
  handleAvatarMove: (id, x, y) => void;
}

const ChatroomAvatar = ({
  chatroomId,
  userId,
  data,
  message = undefined,
  x = 0,
  y = 0,
  is_owner = false,
  handleAvatarMove,
}: ChatroomAvatarProps) => {
  const characterRef = useRef(null);
  const [msg, setMsg] = useState(message);

  const handleMove = async (x, y) => {
    handleAvatarMove(userId, x, y);
    const res = await moveAvatar(chatroomId, userId, x, y);
  };

  useEffect(() => {
    setMsg(message);
    setTimeout(() => {
      setMsg(undefined);
    }, 5000);
  }, [message]);

  return (
    <Draggable
      nodeRef={characterRef}
      position={{ x: x, y: y }}
      onStop={(e, data) => handleMove(data?.x, data?.y)}
      disabled={!is_owner}
      scale={0.55}
    >
      <div className="inline-block relative" style={{ scale: 0.55 }}>
        {msg && (
          <div className="shadow-xl max-w-[180px] max-h-[104px] text-center absolute -top-4 left-[90%] bg-white px-6 py-2 scale-[1.65] rounded-lg before:w-0 before:h-0 before:absolute before:left-2 before:-bottom-1.5 before:border-l-[6px] before:border-l-transparent before:border-t-[8px] before:border-t-white before:border-r-[16px] before:border-r-transparent truncate break-words">
            {msg}
          </div>
        )}
        <Character ref={characterRef} data={data} />
      </div>
    </Draggable>
  );
};

export default ChatroomAvatar;
