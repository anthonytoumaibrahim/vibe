"use server";
import { cookies } from "next/headers";
import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

type AuthParams = {
  data?: object;
  token?: string;
  type: "login" | "signup" | "oauth";
};

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

export async function auth({ data = {}, token, type }: AuthParams) {
  if (token) {
    const response = await sendRequest({
      method: "POST",
      url: `/auth/oauth`,
      body: {
        access_token: token,
      },
    });
    if (response?.success) {
      const { token, type } = response?.authorization;
      cookies().set("token", token, { httpOnly: true });
      redirect("/home");
    }
    return response;
  }

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
