import Eye1 from "../2d/eye/eye5.svg";
import Nose from "../2d/nose/nose4.svg";
import Body1 from "../2d/body/female_body1.svg";
import Face1 from "../2d/face/face1.svg";
import Mouth from "../2d/mouth/mouth6.svg";
import Hair from "../2d/hair/hair2.svg";
import HairBg from "../2d/hair/hair2_backdrop.svg";
import Eyebrow from "../2d/eyebrow/eyebrow1.svg";

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
        <div className="relative">
          <HairBg width={180} className="absolute left-[97px] -top-[2px] z-0" />
          <Face1 width={160} className="absolute left-1/2 -translate-x-1/2" />
          <Hair width={200} className="absolute left-[58px] -top-[10px]" />

          <Eyebrow
            width={112}
            className="absolute left-1/2 -translate-x-1/2 top-[51px]"
          />
          <Eye1
            width={102}
            className="absolute left-1/2 -translate-x-1/2 top-[71px]"
          />
          <Nose
            width={32}
            className="absolute left-1/2 -translate-x-1/2 top-[98px]"
          />
          <Mouth
            width={44}
            className="absolute left-1/2 -translate-x-1/2 top-[126px]"
          />
          <Body1 width={360} className="mt-[144px]" />
        </div>
      </div>
    </>
  );
};

export default Boarding;
