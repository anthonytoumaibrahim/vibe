// Components
import Header from "@/components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Header
        className="absolute top-0 left-0 z-10 text-white"
        logoColor="#ffffff"
      />
      <Hero />

      <main className="container my-12">
        <Features />
      </main>

      <section className="w-full min-h-64 bg-primary-950 text-white flex flex-col items-center justify-center gap-10 before:content-[''] before:">
        <h1 className="font-display">Ready to join the fun?</h1>
        <Button href="/" color="secondary">
          Join now!
        </Button>
      </section>
    </>
  );
}
