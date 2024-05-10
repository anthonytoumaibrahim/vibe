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
import { FaRegClock } from "react-icons/fa6";
import Toggle from "@/components/Toggle";
import Select from "@/components/Select";
import Image from "next/image";
import HelpTooltip from "@/components/HelpTooltip";

const NewChat = ({ backgrounds }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<string | number>(
    backgrounds?.[0]?.id
  );
  const [friendsOnly, setFriendsOnly] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateChatroom = async (data) => {
    setIsLoading(true);
    const res = await createChatroom(
      data.name,
      friendsOnly,
      selectedBackground
    );
    if (res?.success === true) {
      router.push(`/chatrooms/${res?.chatroom_id}`);
    } else {
      toast.error("Sorry, your chat couldn't be created.");
      setIsLoading(false);
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
          <div className="grid grid-cols-2 gap-4">
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
            <Select
              data={backgrounds?.map((bg) => {
                const { id, name, image_url } = bg;
                return {
                  id: id,
                  value: id,
                  name: (
                    <div className="flex gap-2 items-center">
                      <Image
                        width={88}
                        height={88}
                        src={`/images/2d_backgrounds/${image_url}`}
                        alt={name}
                        className="object-cover w-auto h-auto rounded-sm"
                      />
                      {name}
                    </div>
                  ),
                };
              })}
              placeholder="Background"
              optionClassName="p-2"
              value={
                backgrounds?.filter((bg) => bg.id === selectedBackground)?.[0]
                  ?.name
              }
              onChange={(val) => setSelectedBackground(val)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              Make chat room private
              <HelpTooltip>
                Checking this will make the chat room available to your friends
                only.
              </HelpTooltip>
            </div>
            <Toggle
              label="Private chat room"
              active={friendsOnly}
              onChange={() => setFriendsOnly(!friendsOnly)}
            />
          </div>
          <div className="flex items-center gap-2 text-center justify-center text-slate-600">
            <FaRegClock size={22} />
            <p>
              Your chat room will be available for <strong>4 hours</strong>.
            </p>
          </div>
          <Button type="submit" className="mx-auto" loading={isLoading}>
            Create <VC balance={100} balanceClassName="text-white" size={30} />
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default NewChat;
