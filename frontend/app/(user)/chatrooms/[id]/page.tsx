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
      host_id={chatroom?.host_id}
      logged_in_id={chatroom?.logged_in_id}
      users={chatroom?.users}
    />
  );
};

export default Chatroom;
