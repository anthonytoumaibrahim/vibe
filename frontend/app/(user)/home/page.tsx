import { Metadata } from "next";
import { getFeed } from "./actions";
import Posts from "../components/Posts";
import Members from "./components/Members";

export const metadata: Metadata = {
  title: "Home – Vibe",
};

const Home = async () => {
  const feedData = await getFeed();

  return (
    <div className="flex max-lg:flex-wrap gap-6 items-start">
      <Posts
        posts={feedData?.posts?.data}
        page_links={feedData?.posts?.links}
        title="My Feed"
      />
      <Members data={feedData?.latest_members} />
    </div>
  );
};

export default Home;
