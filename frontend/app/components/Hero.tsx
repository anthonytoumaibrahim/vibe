import Button from "@/components/Button";

const Hero = () => {
  return (
    <section
      className="w-full min-h-[557px] bg-cover bg-no-repeat bg-center text-white flex flex-col gap-4 items-center justify-center"
      style={{ backgroundImage: "url('/images/landing/hero_bg.jpg')" }}
    >
      <h1 className="font-display font-normal text-7xl drop-shadow-lg">
        Good Vibes <span className="font-bold">Only</span>
      </h1>
      <h3>Socialize, play, earn currency and more.</h3>
      <div className="flex gap-4">
        <Button>Sign Up</Button>
        <Button>Login</Button>
      </div>
    </section>
  );
};

export default Hero;
