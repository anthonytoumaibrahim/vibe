import Post from "./Post";

const MyPosts = () => {
  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
