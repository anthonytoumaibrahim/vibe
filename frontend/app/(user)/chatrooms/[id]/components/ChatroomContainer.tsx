"use client";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { getParticipant, joinChatroom, sendMessage } from "../../actions";
import Character from "@/app/(user)/2d_components/Character";

interface ChatroomContainerProps {
  id: number;
}

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY ?? "";
const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "";

const ChatroomContainer = ({ id }: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChatPresence = async (userId: number) => {
    const res = await getParticipant(userId);
    setParticipants([...participants, res]);
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
    channel.bind("chatroom-presence", (data) => {
      const { id } = data;
      if (id) {
        handleChatPresence(id);
      }
    });

    channel.bind("pusher:subscription_succeeded", () => {
      setIsLoading(false);
      joinChatroom(id);
    });

    channel.bind("pusher:subscription_error", (error) => {
      setIsError(true);
    });

    return () => {
      channel.unbind("pusher:subscription_succeeded");
    };
  }, []);

  return (
    <div className="w-full h-[720px] bg-slate-500 rounded-lg relative overflow-hidden">
      {!isError &&
        participants?.map((user) => {
          const { id, username, character } = user;
          return <Character key={id} data={character} />;
        })}
    </div>
  );
};

export default ChatroomContainer;
