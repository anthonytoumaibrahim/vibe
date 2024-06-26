import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="w-full min-h-[551px] 2xl:min-h-[780px] relative text-white flex flex-col gap-4 items-center justify-center text-center">
      <Image
        src="/images/landing/hero_bg.jpg"
        alt=""
        className="-z-10 object-cover object-bottom"
        sizes="100vw"
        quality={100}
        fill
        priority={true}
        data-testid="landing_hero"
      />
      <h1 className="font-display font-normal text-6xl sm:text-7xl drop-shadow-lg">
        Good Vibes <span className="font-bold">Only</span>.
      </h1>
      <h3 className="font-normal">Socialize, play, earn currency and more.</h3>
      <div className="flex max-sm:flex-wrap max-sm:justify-center gap-4">
        <Button href="/signup" className="w-40">
          Sign Up
        </Button>
        <Button href="/login" className="w-40" color="secondary">
          Login
        </Button>
      </div>
    </section>
  );
};

export default Hero;
