import CharacterEditor from "./components/CharacterEditor";

const Boarding = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <h1 className="font-display text-6xl">Welcome to Vibe!</h1>
        <p>
          We&apos;re so glad you&apos;re here! Let&apos;s start by customizing
          your character. You can always change it later.
        </p>
      </section>

      <CharacterEditor />
    </>
  );
};

export default Boarding;
