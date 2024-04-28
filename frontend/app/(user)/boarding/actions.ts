"use server";

import { sendRequest } from "@/app/actions";

export async function getCharacter() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/get-character",
  });
  return response;
}

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
