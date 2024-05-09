"use client";

import Character from "@/app/(user)/2d_components/Character";
import { useRef } from "react";
import Draggable from "react-draggable";

const ChatroomAvatar = ({ data }) => {
  const characterRef = useRef(null);

  return (
    <Draggable nodeRef={characterRef}>
      <div ref={characterRef} className="inline-block">
        <Character data={data} scale={0.55} />
      </div>
    </Draggable>
  );
};

export default ChatroomAvatar;
