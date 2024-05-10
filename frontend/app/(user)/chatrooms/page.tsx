import { Metadata } from "next";

import Rooms from "./components/Rooms";
import NewChat from "./components/NewChat";
import { getAllChatrooms } from "./actions";

export const metadata: Metadata = {
  title: "Chat Rooms – Vibe",
};

const Chatrooms = async () => {
  const data = await getAllChatrooms();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1>Chat Rooms</h1>
        <NewChat backgrounds={data?.backgrounds} />
      </div>
      {data?.chatrooms?.length === 0 ? (
        <div className="text-center">
          <p className="font-bold">No chat rooms found.</p>
        </div>
      ) : (
        <Rooms rooms={data?.chatrooms} />
      )}
    </>
  );
};

export default Chatrooms;
