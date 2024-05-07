"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";

export async function getCharacter() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/get-character",
  });
  return response;
}

export async function purchasePart(id: number) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/buy-part",
    body: {
      id: id,
    },
  });
  revalidatePath("/boarding");
  return response;
}

export async function saveCharacter(data: object) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/save-character",
    body: data,
  });
  revalidatePath("/profile");
  return response;
}

export async function generateCharacterAI(message: string) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/generate-character",
    body: {
      message: message,
    },
  });
  return response;
}
