"use client";

import { useEffect, useRef, useState } from "react";
import { moveAvatar } from "../../actions";
import Draggable from "react-draggable";
import Character from "@/app/(user)/2d_components/Character";
import { FaStop, FaUserPlus } from "react-icons/fa6";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "@/components/Button";
import { MdBlock } from "react-icons/md";

interface ChatroomAvatarProps {
  chatroomId: number;
  userId: number;
  data: any;
  message?: string | undefined;
  x?: number;
  y?: number;
  is_owner: boolean;
  is_friend: boolean;
  is_host: boolean;
  username: string;
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
  is_friend = false,
  is_host = false,
  username,
  handleAvatarMove,
}: ChatroomAvatarProps) => {
  const characterRef = useRef(null);
  const [msg, setMsg] = useState(message);
  const [info, showInfo] = useState(false);

  const handleMove = (x, y) => {
    handleAvatarMove(userId, x, y);
    moveAvatar(chatroomId, userId, x, y);
  };

  useEffect(() => {
    const msgTimeout = setTimeout(() => {
      setMsg(undefined);
    }, 20000);
    setMsg(message);

    return () => clearTimeout(msgTimeout);
  }, [message]);

  return (
    <Draggable
      nodeRef={characterRef}
      position={{ x: x, y: y }}
      onStop={(e, data) => handleMove(data?.x, data?.y)}
      disabled={!is_owner}
      scale={0.55}
    >
      <div
        className="inline-block relative origin-center"
        ref={characterRef}
        style={{ scale: 0.55 }}
        onClick={() => showInfo(!info)}
      >
        {msg && (
          <div className="shadow-xl w-max max-w-[180px] text-center absolute -top-4 left-[90%] bg-white dark:text-black px-6 py-2 scale-[1.65] rounded-lg line-clamp-4">
            {msg}
          </div>
        )}
        {info && !is_owner && (
          <div className="absolute bg-black rounded-lg text-white p-4 scale-[1.65] z-10 flex items-center gap-2 text-lg divide-x-4 divide-slate-600">
            <Link
              href={`/profile/${username}`}
              className="unstyled-link flex items-center gap-2 px-2"
              target="_blank"
            >
              {username} <FaExternalLinkAlt />
            </Link>
            {/* {is_host && (
              <Button
                icon={MdBlock}
                variant="link"
                color="error"
                className="!px-2 !py-0"
              >
                Kick
              </Button>
            )} */}
          </div>
        )}
        <Character data={data} />
      </div>
    </Draggable>
  );
};

export default ChatroomAvatar;
