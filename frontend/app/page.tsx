// Components
import Header from "@/components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Header
        className="absolute top-0 left-0 z-10 text-white"
        logoColor="#ffffff"
      />
      <Hero />

      <main className="container my-10">
        <Features />
      </main>
    </>
  );
}
