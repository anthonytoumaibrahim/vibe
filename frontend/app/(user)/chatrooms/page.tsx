import { Metadata } from "next";

import Rooms from "./components/Rooms";

export const metadata: Metadata = {
  title: "Chat Rooms – Vibe",
};

const Chatrooms = () => {
  return (
    <>
      <h1 className="mb-4">Chat Rooms</h1>
      <Rooms />
    </>
  );
};

export default Chatrooms;
