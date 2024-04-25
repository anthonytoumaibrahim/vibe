"use server";
import { cookies } from "next/headers";
import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

export async function checkUsername(username: string) {
  const response = await sendRequest({
    method: "POST",
    url: "/auth/check-username",
    body: {
      username: username,
    },
  });
  return response;
}

export async function auth(data: object, type: "login" | "signup") {
  const response = await sendRequest({
    method: "POST",
    url: `/auth/${type}`,
    body: data,
  });
  if (response?.success) {
    const { token, type } = response?.authorization;
    cookies().set("token", token, { httpOnly: true });
    redirect("/home");
  }
  return response;
}
