"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";

export async function banUser(id: number) {
  const res = await sendRequest({
    method: "POST",
    url: "/admin/users/ban",
    body: {
      id: id,
    },
  });
  revalidatePath("/admin/users");
  return res;
}
