"use client";

import Character from "@/app/(user)/2d_components/Character";
import { useRef } from "react";
import DraggableCore from "react-draggable";
import { moveAvatar } from "../../actions";

const ChatroomAvatar = ({
  chatroomId,
  userId,
  data,
  messages = [],
  x = 0,
  y = 0,
  handleAvatarMove,
}: {
  chatroomId: number;
  userId: number;
  data: any;
  messages: any;
  x?: number;
  y?: number;
  handleAvatarMove: (id, x, y) => void;
}) => {
  const characterRef = useRef(null);

  const handleMove = async (x, y) => {
    handleAvatarMove(userId, x, y);
    const res = await moveAvatar(chatroomId, userId, x, y);
  };

  return (
    <DraggableCore
      nodeRef={characterRef}
      position={{ x: x, y: y }}
      onStop={(e, data) => handleMove(data?.x, data?.y)}
    >
      <div ref={characterRef} className="inline-block relative">
        {messages?.map((msg, index) => {
          const { message } = msg;
          return (
            <div className="absolute top-0 right-0 bg-white p-4" key={index}>
              {message}
            </div>
          );
        })}
        <Character data={data} scale={0.55} />
      </div>
    </DraggableCore>
  );
};

export default ChatroomAvatar;
