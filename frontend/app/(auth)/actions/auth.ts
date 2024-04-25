"use server";
import { cookies } from "next/headers";
import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

export async function auth(jwt: string) {}

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

export async function signup(data: object) {
  const response = await sendRequest({
    method: "POST",
    url: "/auth/signup",
    body: data,
  });
  if (response?.success) {
    const { token, type } = response?.authorization;
    cookies().set("token", token);
    redirect("/home");
  }
  return response;
}
