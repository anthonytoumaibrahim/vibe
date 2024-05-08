"use client";

import { useState } from "react";
import Modal, { ModalSize } from "@/components/Modal";
import AISvg from "./svg/ai.svg";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { generateCharacterAI } from "../../actions";

interface AIProps {
  handleCharacterUpdate: (data) => void;
}

const AI = ({ handleCharacterUpdate }: AIProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const aiRequest = async (data) => {
    setIsLoading(true);
    const response = await generateCharacterAI(data.user_desc);
    if (response?.success === true) {
      handleCharacterUpdate(JSON.parse(response?.data));
      setIsOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="animate-pulse">
        <AISvg width={54} height={54} />
      </button>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        size={ModalSize.xxxl}
        className="text-center space-y-2"
      >
        <AISvg width={200} height={200} className="mx-auto" />
        <h1>AI Generator</h1>
        <p>Type something to describe the character that you want.</p>
        <form className="space-y-4" onSubmit={handleSubmit(aiRequest)}>
          <Input
            placeholder="What do you want your character to look like?"
            textarea={true}
            error={errors?.user_desc?.message}
            {...register("user_desc", {
              required: "Please enter a description",
              minLength: {
                value: 16,
                message: "Please enter more info",
              },
              maxLength: {
                value: 255,
                message: "Too long",
              },
            })}
          />
          <Button className="mx-auto" loading={isLoading} type="submit">
            Generate
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AI;
