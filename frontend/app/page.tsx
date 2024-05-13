import MainLayout from "./layouts/MainLayout";

// Components
import Hero from "./components/Hero";
import Features from "./components/Features";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout transparentHeader={true}>
      <Hero />

      <main className="container my-12">
        <Features />
      </main>

      <section className="w-full min-h-64 bg-gradient-to-t from-primary-950 via-primary-900 to-primary-950 text-white flex flex-col items-center justify-center gap-10 relative z-0">
        <Image
          src="/images/landing/ready_bg.png"
          fill
          alt=""
          quality={100}
          className="-z-10 pointer-events-none object-cover"
        />
        <h1 className="font-display font-normal text-4xl sm:text-6xl drop-shadow-xl text-center">
          Ready to join the fun?
        </h1>
        <Button href="/signup">Sign up now!</Button>
      </section>
    </MainLayout>
  );
}
