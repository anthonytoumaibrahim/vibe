"use client";

import Avatar from "@/app/(user)/components/Avatar";
import { useAppSelector } from "@/app/lib/hooks";
import Link from "next/link";

interface CommentsProps {
  post_id: number;
}

const Comments = ({ post_id }: CommentsProps) => {
  const postCommentsSelector = useAppSelector(
    (state) =>
      state.postsSlice.filter((post: any) => post.id === post_id)?.[0]?.comments
  );

  return (
    <div className="flex flex-col gap-4">
      {postCommentsSelector?.map((comment) => {
        const { id, text, user } = comment;

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
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
