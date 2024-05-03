import Post from "./Post";

const MyPosts = () => {
  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-black w-full">
      <h2 className="text-center">My Posts</h2>

      <div className="grid grid-cols-3 gap-6">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
