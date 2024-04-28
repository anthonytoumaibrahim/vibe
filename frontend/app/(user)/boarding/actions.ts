"use server";

import { sendRequest } from "@/app/actions";

export async function saveCharacter(data: object) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/save-character",
    body: {
      data,
    },
  });
  return response;
}
