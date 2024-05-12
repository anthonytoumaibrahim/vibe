import Button from "@/components/Button";
import VC from "../../components/VC";
import { becomePremium } from "../actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You – Vibe",
};

const ThankYou = async () => {
  const res = await becomePremium();

  return (
    <div className="text-center space-y-4">
      <h1>
        You are now{" "}
        <span className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text uppercase">
          Premium
        </span>
      </h1>
      <h4 className="flex justify-center items-center gap-2">
        Thank you for your purchase! You are now a Premium member.{" "}
        <VC balance={1000} className="inline-flex" /> were added to your
        account.
      </h4>
      <Button href="/" className="!inline-block">
        Back to Home
      </Button>
    </div>
  );
};

export default ThankYou;
