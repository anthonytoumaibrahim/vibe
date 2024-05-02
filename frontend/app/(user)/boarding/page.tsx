import type { Metadata } from "next";

import CharacterEditor from "./components/CharacterEditor";

import { getCharacter } from "./actions";

export const metadata: Metadata = {
  title: "Welcome – Vibe",
};

const Boarding = async () => {
  const characterData: any = await getCharacter();

  return (
    <>
      <section className="text-center">
        <h1 className="font-display text-6xl mb-4">Welcome to Vibe!</h1>
        <h3 className="font-normal">
          We&apos;re so glad you&apos;re here! Let&apos;s start by customizing
          your character. P.S: You can always change it later.
        </h3>
      </section>

      <CharacterEditor
        data={characterData?.data}
        parts={characterData?.parts}
        colors={characterData?.colors}
        is_premium={characterData?.is_premium}
      />
    </>
  );
};

export default Boarding;
