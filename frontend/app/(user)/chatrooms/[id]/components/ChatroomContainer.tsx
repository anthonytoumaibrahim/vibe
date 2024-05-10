"use client";

import { useEffect, useState } from "react";
import { pusher } from "@/app/lib/pusher";
import {
  getParticipant,
  joinChatroom,
  leaveChatroom,
  sendMessage,
} from "../../actions";
import Image from "next/image";
import ChatroomLoading from "./ChatroomLoading";
import MessageForm from "./MessageForm";
import ChatroomAvatar from "./ChatroomAvatar";
import Button from "@/components/Button";

interface ChatroomContainerProps {
  chatroom_id: number;
  chatroom_name: string;
  host_username: string;
  host_id: number;
  logged_in_id: number;
  users: Array<any>;
}

const ChatroomContainer = ({
  chatroom_id,
  chatroom_name,
  host_id,
  host_username,
  logged_in_id,
  users = [],
}: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState(users);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChatPresence = async (userId: number) => {
    const res = await getParticipant(userId);
    setParticipants((prevParticipants) => [...prevParticipants, res]);
  };

  const handleNewMessage = (userId, message) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((us) =>
        us.id === userId
          ? {
              ...us,
              message: message,
            }
          : us
      )
    );
  };

  const handleAvatarMove = (id, x, y) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((us) =>
        us.id === id
          ? {
              ...us,
              x: x,
              y: y,
            }
          : us
      )
    );
  };

  const handleLeave = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((us) => us.id !== id)
    );
  };

  useEffect(() => {
    const channel = pusher.subscribe(`chat_${chatroom_id}`);
    channel.bind("chatroom-message", function (data) {
      const { userId, message } = data;
      if (userId !== logged_in_id) {
        handleNewMessage(userId, message);
      }
    });
    channel.bind("chatroom-presence", (data) => {
      const { id } = data;
      if (id) {
        handleChatPresence(id);
      }
    });
    channel.bind("chatroom-leave", (data) => {
      const { id } = data;
      handleLeave(id);
    });
    channel.bind("chatroom-move", (data) => {
      const { id, x, y } = data;
      if (id !== logged_in_id) {
        handleAvatarMove(id, x, y);
      }
    });

    channel.bind("pusher:subscription_succeeded", () => {
      setIsLoading(false);
      joinChatroom(chatroom_id);
    });

    channel.bind("pusher:subscription_error", (error) => {
      console.log(error);

      setIsError(true);
    });

    return () => {
      channel.unbind_all();
      channel.disconnect();
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3>{chatroom_name}</h3>
          <p>by {host_username}</p>
        </div>
        <Button variant="outlined" onClick={() => leaveChatroom(chatroom_id)}>
          Leave
        </Button>
      </div>
      <div className="w-full h-[720px] bg-slate-500 rounded-lg relative overflow-hidden z-0">
        <Image
          src="/images/chatrooms/bg1.webp"
          fill
          sizes="100%"
          alt=""
          className="object-cover"
        />
        {isLoading && <ChatroomLoading />}
        {!isError &&
          participants?.map((user) => {
            const { username, character, x, y } = user;
            return (
              <ChatroomAvatar
                chatroomId={chatroom_id}
                userId={user?.id}
                key={user?.id}
                data={character}
                message={user?.message}
                x={x}
                y={y}
                handleAvatarMove={handleAvatarMove}
                is_owner={logged_in_id === user?.id}
              />
            );
          })}
        <MessageForm
          chatroom_id={chatroom_id}
          handleSendMessage={(msg) => handleNewMessage(logged_in_id, msg)}
        />
      </div>
    </div>
  );
};

export default ChatroomContainer;
