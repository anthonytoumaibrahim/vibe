"use server";

import { sendRequest } from "@/app/actions";

export async function getProfile() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/profile",
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
