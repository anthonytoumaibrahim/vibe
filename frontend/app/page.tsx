import HelloWorld from "./components/HelloWorld";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-display text-6xl">This is a display title.</h1>
      <h1>This is an h1 title</h1>
      <h2>This is an h2 title</h2>
      <h3>This is an h3 title</h3>
      <h4>This is an h4 title</h4>
      <h5>This is an h5 title</h5>

      <div className="w-12 h-12 bg-primary-main"></div>
      <div className="w-12 h-12 bg-secondary-main"></div>

      <Image src="/vibe.svg" width={181} height={92} alt="Vibe Logo" />

      <HelloWorld name="World" colored={true} />
    </>
  );
}
