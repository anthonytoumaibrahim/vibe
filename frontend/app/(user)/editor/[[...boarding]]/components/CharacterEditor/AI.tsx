"use client";

import { useState } from "react";
import { generateCharacterAI } from "../../actions";
import { useForm } from "react-hook-form";
import Modal, { ModalSize } from "@/components/Modal";
import AISvg from "./svg/ai.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface AIProps {
  handleCharacterUpdate: (data) => void;
  isPremium?: boolean;
}

const AI = ({ handleCharacterUpdate, isPremium = false }: AIProps) => {
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
        {isPremium ? (
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
        ) : (
          <>
            <p>
              The AI Generator is for Premium users only. Upgrade now to use it!
            </p>
            <Button
              href="/premium"
              variant="gradient"
              color="premium"
              className="!inline-block"
            >
              Upgrade to Premium
            </Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default AI;
