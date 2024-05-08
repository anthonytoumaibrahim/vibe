"use client";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { getParticipant, joinChatroom, sendMessage } from "../../actions";

interface ChatroomContainerProps {
  id: number;
}

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY ?? "";
const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "";

const ChatroomContainer = ({ id }: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const get2DCharacter = async (id: number) => {
    const res = await getParticipant(id);
    return res;
  };

  const sendMsg = async () => {
    // channel
  };

  useEffect(() => {
    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
    });
    const channel = pusher.subscribe(`chat_${id}`);
    channel.bind("chatroom-message", function (data) {
      console.log(JSON.stringify(data));
    });
    channel.bind("chatroom-presence", async (data) => {
      const { id, username } = data;
      if (id) {
        const ch = await get2DCharacter(id);
        console.log(ch);
      }
    });

    channel.bind("pusher:subscription_succeeded", () => {
      console.log("connection succeeded!");
      setIsLoading(false);
      joinChatroom(id);
    });
  }, []);

  return (
    <div className="w-full h-[720px] bg-slate-500 rounded-lg">
      <button onClick={() => sendMsg()}>send</button>
    </div>
  );
};

export default ChatroomContainer;
