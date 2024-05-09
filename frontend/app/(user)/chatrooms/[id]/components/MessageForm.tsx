"use client";

import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { sendMessage } from "../../actions";

const MessageForm = ({ chatroom_id }) => {
  const { register, handleSubmit, setValue } = useForm();

  const sendMsg = async (data) => {
    setValue("message", "");
    await sendMessage(chatroom_id, data.message);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(sendMsg)}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md"
    >
      <Input
        placeholder="Type your message here, then press Enter to send"
        className="w-full"
        {...register("message")}
      />
    </form>
  );
};

export default MessageForm;
