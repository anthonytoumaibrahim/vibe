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
