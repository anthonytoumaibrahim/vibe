"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";

export async function generateData() {
  const response = await sendRequest({
    method: "GET",
    url: "/admin/ai",
  });
  revalidatePath("/admin/users");
  return response;
}
