import Part from "../2d_components/Part";

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

      <div className="w-full min-h-[1024px] bg-slate-100 mt-4 rounded-t-xl flex gap-8 relative overflow-hidden">
        <div className="absolute z-0">
          <Part type="hair" absolute={true} id={1} />
          <Part type="face" id={1} center={true} />
          <Part type="eyebrow" id={5} center={true} />
          <Part type="eye" center={true} id={5} />
          <Part type="nose" center={true} id={3} />
          <Part type="mouth" center={true} id={6} />
          <Part type="body" name="female_body" id={1} />
        </div>
      </div>
    </>
  );
};

export default Boarding;
