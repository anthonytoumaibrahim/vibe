"use client";
import Avatar from "@/app/(user)/components/Avatar";
import { useAppSelector } from "@/app/lib/store";
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const Post = ({ id }: { id: number }) => {
  const postSelector = useAppSelector(
    (state) => state.postsSlice.filter((post: any) => post.id === id)?.[0]
  );

  return (
    <div className="overflow-hidden rounded-lg border dark:border-black bg-white dark:bg-black">
      <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-900 p-4">
        <Avatar size={40} url={postSelector?.user?.avatar_full} />
        <p className="font-bold">{postSelector?.user?.username}</p>
        <small className="ml-auto text-slate-600">
          {postSelector?.time_ago}
        </small>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <img
            src="https://placehold.co/400"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <p>{postSelector?.content}</p>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 flex justify-between">
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
