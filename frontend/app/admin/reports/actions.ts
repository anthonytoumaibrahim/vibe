"use server";

import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function getReports() {
  const res = await sendRequest({
    method: "GET",
    url: "/admin/reports",
  });
  return res;
}

export async function getReport(id: number) {
  const res = await sendRequest({
    method: "GET",
    url: `/admin/report/${id}`,
  });
  if (res?.success === false) {
    notFound();
  }
  return res;
}

export async function handleReport(id: number, action: string) {
  const res = await sendRequest({
    method: "POST",
    url: "/admin/handle-report",
    body: {
      report_id: id,
      action: action,
    },
  });
  if (res?.success === true) {
    revalidatePath("/admin/reports");
    redirect("/admin/reports");
  }
  return res;
}
