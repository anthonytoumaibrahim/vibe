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

export async function logout() {
  await sendRequest({
    method: "GET",
    url: "/auth/logout",
  });
  cookies().delete("token");
  redirect("/");
}
