import { Metadata } from "next";
import MDEditor from "../components/MDEditor";

export const metadata: Metadata = {
  title: "New Post – Vibe",
};

const NewPost = () => {
  return (
    <>
      <h1>Create Post</h1>

      <MDEditor content="" />
    </>
  );
};

export default NewPost;
