"use client";

import { useState } from "react";
import { generateData } from "../actions";
import Button from "@/components/Button";
import toast from "react-hot-toast";

const GenerateButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    const res = await generateData();
    if (res?.success === true) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message || "Sorry, something went wrong.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button loading={isLoading} onClick={handleButtonClick}>
        Click to Generate
      </Button>
      {isLoading && (
        <p>Please wait, data generation could take a few minutes...</p>
      )}
    </>
  );
};

export default GenerateButton;
