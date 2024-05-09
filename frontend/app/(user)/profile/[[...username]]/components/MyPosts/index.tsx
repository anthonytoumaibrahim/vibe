"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import Post from "./Post";
import Button from "@/components/Button";
import { getPosts } from "../../actions";

interface MyPostsProps {
  user_id: number;
  posts: Array<any>;
  page_links: Array<{ url: string; label: string; active: boolean }>;
}

const MyPosts = ({ user_id, posts = [], page_links = [] }: MyPostsProps) => {
  const dispatch = useAppDispatch();
  const postsSelector = useAppSelector((state) => state.postsSlice);

  const goToPage = async (page) => {
    const res = await getPosts(user_id, page);
    dispatch({
      type: "postsSlice/initializeData",
      payload: res?.data,
    });
  };

  useEffect(() => {
    dispatch({
      type: "postsSlice/initializeData",
      payload: posts,
    });
  }, [posts]);

  return (
    <>
      <div className="lg:w-1/4 shrink-0">
        <Button href="/new-post">Create new Post</Button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {postsSelector.map((post: any) => {
          const { id } = post;
          return <Post key={id} id={id} />;
        })}

        <div className="flex items-center justify-center">
          {page_links?.map((link, index) => {
            const { url, active, label } = link;
            return (
              index !== 0 &&
              index !== page_links?.length - 1 && (
                <Button
                  key={index}
                  variant="link"
                  onClick={() => goToPage(label)}
                >
                  {label}
                </Button>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
