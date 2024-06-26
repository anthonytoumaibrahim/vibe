"use server";

import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

export async function getChatroom(id: number) {
  const response = await sendRequest({
    method: "GET",
    url: "/user/chatroom/" + id,
  });
  return response;
}

export async function getAllChatrooms() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/chatrooms",
  });
  return response;
}

export async function createChatroom(
  name: string,
  friendsOnly: boolean = false,
  background_id: string | number
) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/create-chatroom",
    body: {
      name: name,
      private: friendsOnly,
      background_id: background_id,
    },
  });
  return response;
}

export async function sendMessage(chatroomId: number, message: string) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/message-chatroom",
    body: {
      chatroom_id: chatroomId,
      message: message,
    },
  });
  return response;
}

export async function moveAvatar(chatroomId: number, userId: number, x, y) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/move-avatar",
    body: {
      chatroom_id: chatroomId,
      userId: userId,
      x: x,
      y: y,
    },
  });
  return response;
}

export async function joinChatroom(chatroomId: number) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/join-chatroom",
    body: {
      chatroom_id: chatroomId,
    },
  });
  return response;
}

export async function leaveChatroom(chatroomId: number) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/leave-chatroom",
    body: {
      chatroom_id: chatroomId,
    },
  });
  redirect("/chatrooms");
  return response;
}

export async function getParticipant(id: number) {
  const response = await sendRequest({
    method: "GET",
    url: "/user/get-participant/" + id,
  });
  return response;
}
