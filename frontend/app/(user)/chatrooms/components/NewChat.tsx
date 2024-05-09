"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createChatroom } from "../actions";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import toast from "react-hot-toast";
import VC from "../../components/VC";
import Input from "@/components/Input";

const NewChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateChatroom = async (data) => {
    const res = await createChatroom(data.name);
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
        <h2 className="mb-2">Create Chat Room</h2>
        <form
          action=""
          onSubmit={handleSubmit(handleCreateChatroom)}
          className="space-y-4"
        >
          <Input
            placeholder="Chat Room Name"
            error={errors?.name?.message}
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Chat room name must be at least 3 characters long.",
              },
              maxLength: {
                value: 20,
                message: "Chat room name cannot exceed 20 characters.",
              },
            })}
          />
          <Button type="submit" className="mx-auto">
            Create <VC balance={100} balanceClassName="text-white" size={30} />
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default NewChat;
