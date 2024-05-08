"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createChatroom } from "../actions";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import toast from "react-hot-toast";

const NewChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleCreateChatroom = async () => {
    const res = await createChatroom("test");
    if (res?.success === true) {
      router.push(`/chatrooms/${res?.chatroom_id}`);
    } else {
      toast.error("Sorry, your chat couldn't be created.");
    }
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create a Chat Room</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <h2>Create Chat Room</h2>
        <Button onClick={() => handleCreateChatroom()}>create</Button>
      </Modal>
    </>
  );
};

export default NewChat;
