"use client";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { joinChatroom, sendMessage } from "../../actions";

interface ChatroomContainerProps {
  id: number;
}

const ChatroomContainer = ({ id }: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState([]);

  const pusher = new Pusher("1015fd935276a6a14082", {
    cluster: "ap1",
  });
  const channel = pusher.subscribe(`chat_${id}`);
  channel.bind("chatroom-message", function (data) {
    console.log(JSON.stringify(data));
  });

  channel.bind("chatroom-presence", function (data) {
    console.log(JSON.stringify(data));
  });

  const sendMsg = async () => {
    // channel
    await joinChatroom(id);
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-[720px] bg-slate-500 rounded-lg">
      <button onClick={() => sendMsg()}>send</button>
    </div>
  );
};

export default ChatroomContainer;
