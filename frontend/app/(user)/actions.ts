"use server";

import { sendRequest } from "@/app/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleFriendRequest(id: number, accepted: boolean) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/handle-request",
    body: {
      id: id,
      accepted: accepted,
    },
  });
  return response;
}

export async function sendReport(post_id: number, reason: string) {
  const response = await sendRequest({
    method: "POST",
    url: "/user/report",
    body: {
      post_id: post_id,
      reason: reason,
    },
  });
  return response;
}

export async function logout() {
  await sendRequest({
    method: "GET",
    url: "/auth/logout",
  });
  cookies().delete("token");
  redirect("/");
}
