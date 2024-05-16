"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { deletePost, likePost } from "../../profile/[[...username]]/actions";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Avatar from "@/app/(user)/components/Avatar";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import {
  FaComment,
  FaFlag,
  FaThumbsDown,
  FaThumbsUp,
  FaTrash,
} from "react-icons/fa6";
import ReportModal from "./ReportModal";

interface PostProps {
  id: number;
  post_data?: object | undefined;
  reportable?: boolean;
  footer?: boolean;
}

const Post = ({
  id,
  post_data,
  reportable = true,
  footer = true,
}: PostProps) => {
  const dispatch = useAppDispatch();
  const postSelector = useAppSelector((state) =>
    post_data
      ? post_data
      : state.postsSlice.posts.filter((post: any) => post.id === id)?.[0]
  );
  const [comments, showComments] = useState(false);
  const [reportModal, showReportModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const like = async () => {
    dispatch({
      type: "postsSlice/likePost",
      payload: id,
    });
    const response = await likePost(id);
  };

  const removePost = async () => {
    dispatch({
      type: "postsSlice/deletePost",
      payload: id,
    });
    const response = await deletePost(id);
  };

  return (
    <>
      <ReportModal
        isOpen={reportModal}
        handleClose={() => showReportModal(false)}
        type="Post"
        id={id}
      />
      <div className="overflow-hidden rounded-lg border dark:border-black bg-white dark:bg-black">
        <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-900 p-4">
          <Link
            href={`/profile/${postSelector?.user?.username}`}
            className="flex items-center gap-4 unstyled-link"
          >
            <Avatar
              size={40}
              url={postSelector?.user?.avatar_full}
              isPremium={postSelector?.user?.is_premium}
            />
            <p className="font-bold">{postSelector?.user?.username}</p>
          </Link>
          <div className="flex items-center gap-2">
            <small className="text-slate-600 dark:text-slate-400">
              {postSelector?.time_ago}
            </small>
            {!postSelector?.is_owner && reportable && (
              <button
                className="text-primary-main hover:text-primary-500"
                onClick={() => showReportModal(true)}
              >
                <FaFlag size={16} />
              </button>
            )}
            {postSelector?.is_owner && (
              <button
                className="text-red-600 hover:text-red-400"
                onClick={() => removePost()}
              >
                <FaTrash size={16} />
              </button>
            )}
          </div>
        </div>
        {postSelector?.images && (
          <Carousel showStatus={false} showThumbs={false}>
            {postSelector?.images?.map((image) => {
              const { id, src } = image;
              const extension = src.split(".").pop();
              return (
                <div key={id} className="w-full h-80 relative">
                  {["mp4", "ogg", "mpeg"].includes(extension) ? (
                    <video className="w-full h-full" controls>
                      <source src={src} type={`video/${extension}`} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={src}
                      sizes="760px"
                      fill
                      className="object-cover"
                      alt="Post Image"
                    />
                  )}
                </div>
              );
            })}
          </Carousel>
        )}
        <div
          className={`p-4 flex flex-col gap-4 max-h-[320px] overflow-hidden`}
          dangerouslySetInnerHTML={{ __html: postSelector?.content }}
        ></div>
        {footer && (
          <>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 flex justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => like()}
                  className={`flex gap-2 items-center transition-colors duration-150 hover:text-primary-main disabled:opacity-50 ${
                    postSelector?.liked_by_user ? "text-primary-main" : ""
                  }`}
                >
                  <FaThumbsUp size={24} />
                  <h5>{postSelector?.likes_count}</h5>
                </button>
                {/* <FaThumbsDown size={26} /> */}
              </div>
              <button
                className="flex gap-2 items-center transition-colors duration-150 hover:text-primary-main"
                onClick={() => showComments(!comments)}
              >
                <FaComment size={24} />
                <h5>{postSelector?.comments_count}</h5>
              </button>
            </div>
            {comments && (
              <div className="p-4 bg-slate-50 dark:bg-slate-800 space-y-4">
                <h4>Comments ({postSelector?.comments_count})</h4>
                <CommentForm post_id={id} />
                <Comments post_id={id} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Post;
