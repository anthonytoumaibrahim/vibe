import { sendRequest } from "@/app/actions";

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
