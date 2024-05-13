import { Metadata } from "next";
import { getPremiumItems } from "./actions";
import Image from "next/image";
import PremiumBullet from "./components/svg/premium_bullet.svg";
import PremiumButton from "./components/PremiumButton";
import PremiumItems from "./components/PremiumItems";
import VC from "../components/VC";

export const metadata: Metadata = {
  title: "Premium – Vibe",
};

const Premium = async () => {
  const premiumItems = await getPremiumItems();

  return (
    <>
      <section className="flex items-center justify-center lg:justify-between max-h-[580px] overflow-hidden mb-10">
        <div className="space-y-4">
          <h1 className="premium-text uppercase text-6xl">Premium</h1>
          <h3>
            Become a{" "}
            <span className="premium-text uppercase font-bold">Premium</span>{" "}
            Member today
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <PremiumBullet width={24} className="shrink-0" />
              Unlock more items for your Avatar
            </li>
            <li className="flex items-center gap-2">
              <PremiumBullet width={24} className="shrink-0" />
              Boost the Visibility of your Posts on Other Users&apos; Pages
            </li>
            <li className="flex items-center gap-2">
              <PremiumBullet width={24} className="shrink-0" />
              Unlock the AI Generator
            </li>
          </ul>
          <div className="flex gap-2 items-end">
            <h1 className="premium-text uppercase font-bold">$4.99</h1>
            <p>/month</p>
          </div>
          <PremiumButton />
        </div>
        <Image
          src="/images/premium_lady.png"
          width={736}
          height={877}
          alt=""
          quality={100}
          priority={true}
          className="mt-[310px] hidden lg:block"
        />
      </section>
      <div className="flex gap-10 items-start justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="uppercase text-center">
            Premium exclusive Avatar parts
          </h1>
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <PremiumItems items={premiumItems?.items} />
          </div>
          <div className="flex items-center gap-2">
            You also get{" "}
            <VC balance={1000} size={48} balanceClassName="text-xl" />
          </div>
          <PremiumButton />
        </div>
      </div>
    </>
  );
};

export default Premium;
