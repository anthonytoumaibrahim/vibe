"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCheckoutUrl } from "../actions";
import toast from "react-hot-toast";
import Button from "@/components/Button";

const PremiumButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePremiumBtnClick = async () => {
    setIsLoading(true);
    const res = await getCheckoutUrl();

    const url = res?.checkout_url;
    if (url) {
      return router.push(url);
    }
    setIsLoading(false);
    toast.error("Sorry, something went wrong!");
  };

  return (
    <Button
      variant="gradient"
      color="premium"
      onClick={handlePremiumBtnClick}
      loading={isLoading}
    >
      Upgrade Now
    </Button>
  );
};

export default PremiumButton;
