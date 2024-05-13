"use client";

import Avatar from "@/app/(user)/components/Avatar";
import { useAppSelector } from "@/app/lib/hooks";
import Link from "next/link";
import { FaTrash } from "react-icons/fa6";
import { deleteComment } from "../../profile/[[...username]]/actions";

interface CommentsProps {
  post_id: number;
}

const Comments = ({ post_id }: CommentsProps) => {
  const postCommentsSelector = useAppSelector(
    (state) =>
      state.postsSlice.posts?.filter((post: any) => post.id === post_id)?.[0]
        ?.comments
  );

  return postCommentsSelector?.length === 0 ? (
    <div className="text-center">
      <p className="font-bold">No comments yet.</p>
      <p>Be the first to comment!</p>
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      {postCommentsSelector?.map((comment) => {
        const { id, text, user, time_ago, is_owner } = comment;

        return (
          <div key={id} className="flex gap-4 items-start">
            <Link href={`/profile/${user?.username}`} className="unstyled-link">
              <Avatar
                url={user?.avatar_full}
                isPremium={user?.is_premium}
                size={44}
                username={user?.username}
              />
            </Link>
            <div className="">
              <strong>{user?.username}</strong>
              <p>{text}</p>
            </div>
            <div className="ml-auto flex items-center gap-2 shrink-0">
              <small className="text-slate-600 dark:text-slate-400">
                {time_ago}
              </small>
              {is_owner && (
                <button
                  className="text-red-600 hover:text-red-400"
                  onClick={() => deleteComment(id)}
                >
                  <FaTrash size={16} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
