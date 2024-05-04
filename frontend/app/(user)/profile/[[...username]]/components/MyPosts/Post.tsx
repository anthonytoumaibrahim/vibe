import Avatar from "@/app/(user)/components/Avatar";
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const Post = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <div className="flex items-center gap-4 bg-slate-100 p-4">
        <Avatar size={40} />
        <p className="font-bold">username123</p>
        <small className="ml-auto text-slate-600">4 days ago</small>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <img
            src="https://placehold.co/400"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <p>The content of the post.</p>
      </div>

      <div className="p-4 bg-slate-50 flex justify-between">
        <div className="flex items-center gap-2">
          <FaThumbsUp size={26} />
          <h5>11</h5>
          <FaThumbsDown size={26} />
        </div>
        <div className="flex gap-2 items-center">
          <FaComment size={26} />
          <h5>1</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
