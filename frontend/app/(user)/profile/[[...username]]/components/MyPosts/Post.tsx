"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import Image from "next/image";
import Avatar from "@/app/(user)/components/Avatar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { likePost } from "../../actions";

const Post = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const postSelector = useAppSelector(
    (state) => state.postsSlice.filter((post: any) => post.id === id)?.[0]
  );

  const like = async () => {
    dispatch({
      type: "postsSlice/likePost",
      payload: id,
    });
    const response = await likePost(id);
  };

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
        <Carousel showStatus={false} showThumbs={false}>
          {postSelector?.images?.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="w-full h-80 relative">
                <Image
                  src={src}
                  sizes="760px"
                  fill
                  className="object-cover"
                  alt="Post Image"
                />
              </div>
            );
          })}
        </Carousel>
      )}

      <div
        className="p-4 flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: postSelector?.content }}
      ></div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 flex justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => like()}
            className={`flex gap-2 items-center ${
              postSelector?.liked_by_user ? "text-primary-main" : ""
            }`}
          >
            <FaThumbsUp size={24} />
            <h5>{postSelector?.likes_count}</h5>
          </button>
          {/* <FaThumbsDown size={26} /> */}
        </div>
        <div className="flex gap-2 items-center">
          <FaComment size={24} />
          <h5>{postSelector?.comments_count}</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
