"use client";

import { useAppSelector } from "@/app/lib/hooks";

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
        const { id, text } = comment;
      })}
    </div>
  );
};

export default Comments;
