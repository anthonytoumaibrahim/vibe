"use server";

import { sendRequest } from "@/app/actions";

export async function savePost(data) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/post",
    body: data,
  });

  return response;
}
