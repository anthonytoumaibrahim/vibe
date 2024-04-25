import Eye1 from "../2d/eye/eye5.svg";
import Nose from "../2d/nose/nose4.svg";
import Body1 from "../2d/body/female_body1.svg";
import Face1 from "../2d/face/face1.svg";
import Mouth from "../2d/mouth/mouth6.svg";
import Hair1 from "../2d/hair/hair2.svg";
import HairBg from "../2d/hair/hair2_backdrop.svg";
import Eyebrow from "../2d/eyebrow/eyebrow1.svg";

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

      <div className="w-full h-full bg-slate-100 mt-4 rounded-t-xl flex gap-8">
        <div className="relative z-0">
          <Part type="hair" absolute={true} id={1} />
          <Part type="face" id={1} center={true} />
          <Part type="eyebrow" id={5} center={true} />
          <Part type="eye" center={true} id={5} />
          <Part type="nose" center={true} id={3} />
          <Part type="mouth" center={true} id={6} />
          <Body1 width={320} className="mt-[144px]" />
        </div>
      </div>
    </>
  );
};

export default Boarding;
