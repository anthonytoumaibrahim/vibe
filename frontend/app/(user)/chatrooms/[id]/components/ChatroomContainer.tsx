"use client";

import { useEffect, useState } from "react";
import { pusher } from "@/app/lib/pusher";
import { getParticipant, joinChatroom, sendMessage } from "../../actions";
import Image from "next/image";
import ChatroomLoading from "./ChatroomLoading";
import MessageForm from "./MessageForm";
import ChatroomAvatar from "./ChatroomAvatar";

interface ChatroomContainerProps {
  id: number;
}

const ChatroomContainer = ({ id }: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState<Array<any>>([]);
  const [messages, setMessages] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChatPresence = async (userId: number) => {
    const res = await getParticipant(userId);
    setParticipants((prevParticipants) => [...prevParticipants, res]);
  };

  const handleNewMessage = async (userId, message) => {
    const newMsg = {
      userId: userId,
      message: message,
    };
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  useEffect(() => {
    const channel = pusher.subscribe(`chat_${id}`);
    channel.bind("chatroom-message", function (data) {
      const { userId, message } = data;
      handleNewMessage(userId, message);
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
      console.log(error);

      setIsError(true);
    });

    return () => {
      channel.unbind_all();
    };
  }, []);

  return (
    <div className="w-full h-[720px] bg-slate-500 rounded-lg relative overflow-hidden z-0">
      <Image src="/images/chatrooms/bg1.webp" fill sizes="100%" alt="" />
      {isLoading && <ChatroomLoading />}
      {!isError &&
        participants?.map((user) => {
          const { username, character } = user;
          return (
            <ChatroomAvatar
              chatroomId={user?.id}
              userId={id}
              key={user?.id}
              data={character}
              messages={messages?.filter(
                (msg: any) => msg?.userId === user?.id
              )}
            />
          );
        })}
      <MessageForm chatroom_id={id} />
    </div>
  );
};

export default ChatroomContainer;
