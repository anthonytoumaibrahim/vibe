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
  let shouldRedirect = false;
  let reqResponse: any;
  try {
    const body = token ? { access_token: token } : { ...data };
    const response: any = await sendRequest({
      method: "POST",
      url: `/auth/${token ? "oauth" : type}`,
      body: body,
    });
    if (response?.success) {
      const { token, type } = response?.authorization;
      cookies().set("token", token, { httpOnly: true });
      shouldRedirect = true;
    }
    reqResponse = response;
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message,
    };
  }

  if (shouldRedirect) {
    redirect(type === "signup" ? "/editor/boarding" : "/home");
  }

  return reqResponse;
}
