"use client";

import { useState } from "react";
import Character from "./components/Character";
import Tabs from "./components/Tabs";
import Image from "next/image";

const Boarding = () => {
  const [body, setBody] = useState("male_body");

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

        <div className="relative z-0 scale-75">
          <Character body={body} />
        </div>

        <div className="ml-auto flex gap-10">
          <Tabs setBody={(val) => setBody(val)} />
        </div>
      </div>
    </>
  );
};

export default Boarding;
