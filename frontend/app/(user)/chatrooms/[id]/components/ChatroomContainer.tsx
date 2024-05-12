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
import Link from "next/link";

interface ChatroomContainerProps {
  chatroom_id: number;
  chatroom_name: string;
  host_username: string;
  host_id: number;
  logged_in_id: number;
  users: Array<any>;
  background: string;
}

const ChatroomContainer = ({
  chatroom_id,
  chatroom_name,
  host_id,
  host_username,
  logged_in_id,
  users = [],
  background,
}: ChatroomContainerProps) => {
  const [participants, setParticipants] = useState(users);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [leaving, setLeaving] = useState(false);

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

  const handleBeforeUnload = (e) => {
    leaveChatroom(chatroom_id);
    e.preventDefault();
    e.returnValue = true;
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
    channel.bind("chatroom-left", (data) => {
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

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      channel.unbind_all();
      channel.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3>{chatroom_name}</h3>
          <p>
            by <Link href={`/profile/${host_username}`}>{host_username}</Link>
          </p>
        </div>
        <Button
          variant="outlined"
          onClick={() => {
            setLeaving(true);
            leaveChatroom(chatroom_id);
          }}
          loading={leaving}
        >
          Leave
        </Button>
      </div>
      <div className="w-full h-[720px] bg-slate-500 rounded-lg relative overflow-hidden z-0">
        <Image
          src={`/images/2d_backgrounds/${background}`}
          fill
          sizes="100%"
          alt=""
          className="object-cover"
          priority={true}
        />
        {isLoading && <ChatroomLoading />}
        {!isError &&
          participants?.map((user) => {
            const { username, character, x, y, is_owner, is_friend } = user;
            return (
              <ChatroomAvatar
                chatroomId={chatroom_id}
                username={username}
                userId={user?.id}
                key={user?.id}
                data={character}
                message={user?.message}
                x={x}
                y={y}
                handleAvatarMove={handleAvatarMove}
                is_host={logged_in_id === host_id}
                is_owner={is_owner}
                is_friend={is_friend}
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
