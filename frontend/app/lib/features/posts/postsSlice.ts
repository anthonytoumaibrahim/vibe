"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState: any = { posts: [], links: [] };

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: initState,
  reducers: {
    initializeData: (state, action) => {
      state.posts = action.payload;
    },
    initializePageLinks: (state, action) => {
      state.links = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      state.posts = state.posts.map((post) => {
        const { likes_count, liked_by_user } = post;
        return post.id === action.payload
          ? {
              ...post,
              liked_by_user: !liked_by_user,
              likes_count: liked_by_user ? likes_count - 1 : likes_count + 1,
            }
          : post;
      });
    },
    addComment: (state, action) => {
      const { post_id, comment } = action.payload;
      state.posts = state.posts.map((post) => {
        const { comments_count } = post;
        return post.id === post_id
          ? {
              ...post,
              comments_count: comments_count + 1,
              comments: [...post.comments, comment],
            }
          : post;
      });
    },
    deleteComment: (state, action) => {
      const { post_id, comment_id } = action.payload;
      state.posts = state.posts.map((post) => {
        const { comments_count } = post;
        return post.id === post_id
          ? {
              ...post,
              comments_count: comments_count - 1,
              comments: post.comments.filter(
                (comment) => comment.id !== comment_id
              ),
            }
          : post;
      });
    },
  },
});

export const {
  initializeData,
  initializePageLinks,
  addPost,
  deletePost,
  likePost,
  addComment,
  deleteComment,
} = postsSlice.actions;
export default postsSlice.reducer;
