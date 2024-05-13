"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import { getPosts } from "../../profile/[[...username]]/actions";
import Post from "./Post";
import Button from "@/components/Button";
import { FaPencil } from "react-icons/fa6";

interface PostsProps {
  user_id?: number;
  posts: Array<any>;
  page_links: Array<{ url: string; label: string; active: boolean }>;
  title?: string;
  is_owner?: boolean;
}

const Posts = ({
  user_id,
  posts = [],
  page_links = [],
  title = "My Posts",
  is_owner = true,
}: PostsProps) => {
  const dispatch = useAppDispatch();
  const postsSelector = useAppSelector((state) => state.postsSlice.posts);
  const pageLinksSelector = useAppSelector((state) => state.postsSlice.links);

  const goToPage = async (page) => {
    const res = await getPosts({ page: page, user_id: user_id });
    dispatch({
      type: "postsSlice/initializeData",
      payload: res?.posts?.data,
    });
    dispatch({
      type: "postsSlice/initializePageLinks",
      payload: res?.posts?.links,
    });
  };

  useEffect(() => {
    dispatch({
      type: "postsSlice/initializeData",
      payload: posts,
    });
    dispatch({
      type: "postsSlice/initializePageLinks",
      payload: page_links,
    });
  }, [posts]);

  return (
    <>
      {/* <div className="lg:w-1/4 shrink-0"></div> */}
      <div className="max-lg:order-2 w-full">
        <div className="flex items-center justify-between mb-4">
          <h3>{title}</h3>
          {is_owner && (
            <Button
              href="/new-post"
              variant="link"
              icon={FaPencil}
              className="!px-0"
            >
              Create new Post
            </Button>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {postsSelector?.length === 0 ? (
            <p className="text-center text-slate-400">No posts found.</p>
          ) : (
            <>
              {postsSelector.map((post: any) => {
                const { id } = post;
                return <Post key={id} id={id} />;
              })}
              <div className="flex items-center justify-center gap-2">
                {pageLinksSelector?.map((link, index) => {
                  const { url, active, label } = link;
                  return (
                    index !== 0 &&
                    index !== page_links?.length - 1 && (
                      <Button
                        key={index}
                        variant="link"
                        onClick={() => goToPage(label)}
                        className={`!px-4 !py-2 ${
                          active ? "bg-primary-main !text-white" : ""
                        }`}
                      >
                        {label}
                      </Button>
                    )
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
