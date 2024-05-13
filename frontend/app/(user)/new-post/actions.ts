"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";

export async function savePost(data) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/post",
    body: data,
  });
  revalidatePath("/");
  return response;
}
