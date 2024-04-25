import Part from "../2d_components/Part";
import Tabs from "./components/Tabs";
import Image from "next/image";

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

      <div className="w-full min-h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden">
        <Image
          src="/images/boarding_bg.webp"
          alt=""
          className="object-cover object-left filter blur-sm -z-10"
          sizes="100%"
          priority={true}
          fill
        />

        <div className="relative z-0 mx-auto my-10">
          <Part type="hair" center={true} id={2} />
          <Part type="face" id={1} center={true} />
          <Part type="eyebrow" id={5} center={true} />
          <Part type="eye" center={true} id={5} />
          <Part type="nose" center={true} id={3} />
          <Part type="mouth" center={true} id={6} />
          <Part type="body" name="female_body" id={1} />
        </div>

        <div className="ml-auto flex gap-10">
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default Boarding;
