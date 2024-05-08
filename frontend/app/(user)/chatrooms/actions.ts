import { sendRequest } from "@/app/actions";

export async function getChatroom(id: number) {
  const response = await sendRequest({
    method: "GET",
    url: "/user/chatroom/" + id,
  });
  return response;
}

export async function createChatroom(name?: string) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/create-chatroom",
    body: {
      name: name,
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

export async function getParticipant(id: number) {
  const response = await sendRequest({
    method: "GET",
    url: "/user/get-participant/" + id,
  });
  return response;
}
