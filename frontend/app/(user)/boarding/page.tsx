import type { Metadata } from "next";

import CharacterEditor from "./components/CharacterEditor";

import StoreProvider from "./StoreProvider";

import { getCharacter } from "./actions";

export const metadata: Metadata = {
  title: "Welcome – Vibe",
};

const Boarding = async () => {
  const characterData = await getCharacter();

  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <h1 className="font-display text-6xl">Welcome to Vibe!</h1>
        <h3 className="font-normal">
          We&apos;re so glad you&apos;re here! Let&apos;s start by customizing
          your character. P.S: You can always change it later.
        </h3>
      </section>

      <StoreProvider data={characterData?.data}>
        <CharacterEditor />
      </StoreProvider>
    </>
  );
};

export default Boarding;
