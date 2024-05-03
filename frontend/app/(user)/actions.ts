"use server";

import { sendRequest } from "@/app/actions";
import { redirect } from "next/navigation";

export async function logout() {
  await sendRequest({
    method: "GET",
    url: "/auth/logout",
  });
  redirect("/");
}
