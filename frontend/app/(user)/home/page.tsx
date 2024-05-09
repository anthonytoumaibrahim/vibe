import { Metadata } from "next";
import { getFeed } from "./actions";

export const metadata: Metadata = {
  title: "Home – Vibe",
};

const Home = async () => {
  const feedData = await getFeed();

  return <div>Home</div>;
};

export default Home;
