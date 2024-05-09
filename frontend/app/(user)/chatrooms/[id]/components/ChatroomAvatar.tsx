"use client";

import Character from "@/app/(user)/2d_components/Character";
import { useRef } from "react";
import Draggable from "react-draggable";
import { moveAvatar } from "../../actions";

const ChatroomAvatar = ({
  chatroomId,
  userId,
  data,
  messages = [],
}: {
  chatroomId: number;
  userId: number;
  data: any;
  messages: any;
}) => {
  const characterRef = useRef(null);

  const handleAvatarMove = async (x, y) => {
    const res = await moveAvatar(chatroomId, userId, x, y);
  };

  return (
    <Draggable
      nodeRef={characterRef}
      onStop={(e, data) => handleAvatarMove(data?.x, data?.y)}
    >
      <div ref={characterRef} className="inline-block relative">
        {messages?.map((msg, index) => {
          const { message } = msg;
          return (
            <div className="absolute top-0 right-0 bg-white" key={index}>
              {message}
            </div>
          );
        })}
        <Character data={data} scale={0.55} />
      </div>
    </Draggable>
  );
};

export default ChatroomAvatar;
