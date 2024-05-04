"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import Post from "./Post";
import Button from "@/components/Button";

interface MyPostsProps {
  posts: Array<any>;
}

const MyPosts = ({ posts = [] }: MyPostsProps) => {
  const dispatch = useAppDispatch();
  const postsSelector = useAppSelector((state) => state.postsSlice);

  useEffect(() => {
    dispatch({
      type: "postsSlice/initializeData",
      payload: posts,
    });
  }, [posts]);

  return (
    <>
      <div className="w-1/4 shrink-0">
        <Button href="/new-post">Create new Post</Button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {postsSelector.map((post: any) => {
          const { id } = post;
          return <Post key={id} id={id} />;
        })}
      </div>
    </>
  );
};

export default MyPosts;
