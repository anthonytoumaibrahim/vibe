import MainLayout from "./layouts/MainLayout";

// Components
import Hero from "./components/Hero";
import Features from "./components/Features";
import Button from "@/components/Button";

export default function Home() {
  return (
    <MainLayout transparentHeader={true}>
      <Hero />

      <main className="container my-12">
        <Features />
      </main>

      <section className="w-full min-h-64 bg-gradient-to-t from-primary-950 via-primary-900 to-primary-950 text-white flex flex-col items-center justify-center gap-10">
        <h1 className="font-display text-5xl">Ready to join the fun?</h1>
        <Button href="/signup" color="secondary">
          Join now!
        </Button>
      </section>
    </MainLayout>
  );
}
