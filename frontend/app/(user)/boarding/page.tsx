import Eye1 from "../2d/eye/eye1.svg"

const Boarding = async () => {
  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <h1 className="font-display text-6xl">Welcome to Vibe!</h1>
        <p>
          We&apos;re so glad you&apos;re here! Let&apos;s start by customizing
          your character. You can always change it later.
        </p>
      </section>

      <div className="w-full bg-slate-100 mt-4 rounded-t-xl flex justify-end gap-8">
        <div></div>
        <div className="">
          <Eye1 />
        </div>
      </div>
    </>
  );
};

export default Boarding;
