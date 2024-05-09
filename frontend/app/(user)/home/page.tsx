import { Metadata } from "next";
import { getFeed } from "./actions";
import Posts from "../components/Posts";

export const metadata: Metadata = {
  title: "Home – Vibe",
};

const Home = async () => {
  const feedData = await getFeed();

  return (
    <>
      <Posts
        posts={feedData?.posts?.data}
        page_links={feedData?.posts?.links}
        title="My Feed"
      />
    </>
  );
};

export default Home;
