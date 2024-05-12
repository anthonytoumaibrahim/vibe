"use server";
import { cookies } from "next/headers";
import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

type AuthParams = {
  data?: object;
  token?: string;
  type: "login" | "signup" | "oauth";
  boarding?: boolean;
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

export async function auth({
  data = {},
  token,
  type,
  boarding = false,
}: AuthParams) {
  const body = token ? { access_token: token } : { ...data };
  const response: any = await sendRequest({
    method: "POST",
    url: `/auth/${token ? "oauth" : type}`,
    body: body,
  });
  if (response?.success) {
    const { token, type } = response?.authorization;
    cookies().set("token", token, { httpOnly: true });
    redirect(boarding ? "/editor/boarding" : "/home");
  } else {
    return {
      success: false,
      message: response?.message,
    };
  }
}
