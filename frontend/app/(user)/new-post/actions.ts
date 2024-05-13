"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function savePost(data) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/post",
    body: data,
  });
  revalidatePath("/");
  if (response?.success === true) {
    redirect("/profile");
  }
  return response;
}
