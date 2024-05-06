"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export async function getProfile(username?: string) {
  const response = await sendRequest({
    method: "GET",
    url: `/user/profile/${username ? username : ""}`,
  });
  if (response?.status === 404) {
    notFound();
  }
  return response;
}

export async function sendFriendRequest(id: number) {
  const response = await sendRequest({
    method: "GET",
    url: `/user/send-request/${id}`,
  });
  return response;
}

export async function saveBio(data: { bio?: string }) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/save-bio",
    body: {
      bio: data.bio,
    },
  });
  return response;
}

export async function updateBackground(id: number) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/update-background",
    body: {
      background_id: id,
    },
  });
  return response;
}

export async function likePost(id: number) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/post/like",
    body: {
      post_id: id,
    },
  });
  revalidatePath("/");
  return response;
}

export async function deletePost(id: number) {
  const response = await sendRequest({
    method: "DELETE",
    url: `/user/post/${id}`,
  });
  revalidatePath("/");
  return response;
}
