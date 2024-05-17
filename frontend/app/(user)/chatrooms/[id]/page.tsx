import { Metadata } from "next";
import { getChatroom } from "../actions";
import ChatroomContainer from "./components/ChatroomContainer";

export const metadata: Metadata = {
  title: "Chatroom – Vibe",
};

const Chatroom = async ({ params }: { params: { id: number } }) => {
  const chatroom = await getChatroom(params.id);

  return (
    <ChatroomContainer
      chatroom_id={chatroom?.id}
      chatroom_name={chatroom?.name}
      host_id={chatroom?.host?.id}
      host_username={chatroom?.host?.username}
      logged_in_id={chatroom?.logged_in_id}
      users={chatroom?.users}
      background={chatroom?.background?.image_url}
      messages={chatroom?.messages}
    />
  );
};

export default Chatroom;
