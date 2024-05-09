"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import { getPosts } from "../../profile/[[...username]]/actions";
import Post from "./Post";
import Button from "@/components/Button";
import { FaPencil } from "react-icons/fa6";

interface MyPostsProps {
  user_id: number;
  posts: Array<any>;
  page_links: Array<{ url: string; label: string; active: boolean }>;
}

const Posts = ({ user_id, posts = [], page_links = [] }: MyPostsProps) => {
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
      <div className="lg:w-1/4 shrink-0"></div>
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3>My Posts</h3>
          <Button
            href="/new-post"
            variant="link"
            icon={FaPencil}
            className="!px-0"
          >
            Create new Post
          </Button>
        </div>
        <div className="flex flex-col gap-6">
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
      </div>
    </>
  );
};

export default Posts;
