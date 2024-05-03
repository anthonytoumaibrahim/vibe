import type { Metadata } from "next";

import CharacterEditor from "./components/CharacterEditor";

import { getCharacter } from "./actions";

export const metadata: Metadata = {
  title: "Edit your Avatar – Vibe",
};

const Editor = async ({ params }: { params: { boarding?: boolean } }) => {
  const characterData: any = await getCharacter();

  return (
    <>
      <section className="text-center">
        {params.boarding ? (
          <>
            <h1 className="font-display text-6xl mb-4">Welcome to Vibe!</h1>
            <h3 className="font-normal">
              We&apos;re so glad you&apos;re here! Let&apos;s start by
              customizing your character. P.S: You can always change it later.
            </h3>
          </>
        ) : (
          <h1 className="mb-4">Edit your Avatar</h1>
        )}
      </section>

      <CharacterEditor
        data={characterData?.data}
        parts={characterData?.parts}
        colors={characterData?.colors}
        is_premium={characterData?.is_premium}
        is_boarding={params.boarding}
      />
    </>
  );
};

export default Editor;
