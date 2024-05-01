"use server";

import { sendRequest } from "@/app/actions";

export async function getProfile(username?: string) {
  const response = await sendRequest({
    method: "GET",
    url: `/user/profile/${username ? username : ""}`,
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
