"use server";

import { sendRequest } from "@/app/actions";
import { notFound } from "next/navigation";

export async function getProfile(username?: string) {
  try {
    const response = await sendRequest({
      method: "GET",
      url: `/user/profile/${username ? username : ""}`,
    });
    return response;
  } catch (error) {
    notFound();
  }
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
