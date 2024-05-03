const Post = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <div className="w-full h-[280px] relative border-b overflow-hidden">
        <img
          src="https://placehold.co/400"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3>Post Title</h3>
        <p>Post content goes here...</p>
      </div>
    </div>
  );
};

export default Post;
