"use client";

import { useState } from "react";
import Character from "../2d_components/Character";
import Tabs from "./components/Tabs";
import Image from "next/image";

const Boarding = () => {
  const [character, setCharacter] = useState({
    body: {
      id: 1,
      fill: "#df9777",
    },
    hair: {
      id: 1,
      fill: "#c73030",
    },
  });

  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <h1 className="font-display text-6xl">Welcome to Vibe!</h1>
        <p>
          We&apos;re so glad you&apos;re here! Let&apos;s start by customizing
          your character. You can always change it later.
        </p>
      </section>

      <div className="w-full h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden">
        <Image
          src="/images/boarding_bg.webp"
          alt=""
          className="object-cover object-left filter blur-sm -z-10"
          sizes="100%"
          priority={true}
          fill
        />

        <div className="relative z-0 scale-75 mx-auto">
          <Character data={character} />
        </div>

        <div className="ml-auto flex gap-10">
          <Tabs
            updateCharacter={(type, value) =>
              setCharacter({
                ...character,
                [type]: {
                  ...character[type],
                  ...value,
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Boarding;
