import { Metadata } from "next";
import { getChatroom } from "../actions";
import ChatroomContainer from "./components/ChatroomContainer";

export const metadata: Metadata = {
  title: "Chatroom – Vibe",
};

const Chatroom = async ({ params }: { params: { id: number } }) => {
  const chatroom = await getChatroom(params.id);

  return <ChatroomContainer id={chatroom?.id} users={chatroom?.users} />;
};

export default Chatroom;
