import { Metadata } from "next";

import Rooms from "./components/Rooms";
import NewChat from "./components/NewChat";

export const metadata: Metadata = {
  title: "Chat Rooms – Vibe",
};

const Chatrooms = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1>Chat Rooms</h1>
        <NewChat />
      </div>
      <Rooms />
    </>
  );
};

export default Chatrooms;
