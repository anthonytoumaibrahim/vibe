import { Metadata } from "next";
import Image from "next/image";
import PremiumBullet from "./components/svg/premium_bullet.svg";
import PremiumButton from "./components/PremiumButton";

export const metadata: Metadata = {
  title: "Premium – Vibe",
};

const Premium = () => {
  return (
    <div className="flex gap-4 items-start">
      <div className="relative w-1/2 h-[720px]">
        <Image src="/images/premium_lady.svg" fill alt="" />
      </div>
      <div className="space-y-4">
        <h1 className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text uppercase text-6xl">
          Premium
        </h1>
        <h3>
          Become a{" "}
          <span className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text uppercase font-bold">
            Premium
          </span>{" "}
          Member today
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <PremiumBullet width={24} />
            Unlock more items for your Avatar
          </li>
          <li className="flex items-center gap-2">
            <PremiumBullet width={24} />
            Boost the Visibility of your Posts on Other Users&apos; Pages
          </li>
        </ul>
        <PremiumButton />
      </div>
    </div>
  );
};

export default Premium;
