import { Metadata } from "next";
import PostEditor from "./components/PostEditor";

export const metadata: Metadata = {
  title: "New Post – Vibe",
};

const NewPost = () => {
  return (
    <>
      <h1 className="mb-4">Create Post</h1>

      <PostEditor />
    </>
  );
};

export default NewPost;
