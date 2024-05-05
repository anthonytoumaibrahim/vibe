"use client";
import { useAppSelector } from "@/app/lib/store";
import Image from "next/image";
import Avatar from "@/app/(user)/components/Avatar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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

      {postSelector?.images && (
        <Carousel
          className="flex flex-wrap gap-2 relative h-60"
          showStatus={false}
          showThumbs={false}
        >
          {postSelector?.images?.map((image) => {
            const { id, src } = image;
            return (
              <Image
                key={id}
                src={src}
                width={760}
                height={240}
                className="object-cover"
                alt="Post Image"
              />
            );
          })}
        </Carousel>
      )}

      <div className="p-4 flex flex-col gap-4">
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
