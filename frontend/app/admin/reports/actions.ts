import { sendRequest } from "@/app/actions";

export async function getReports() {
  const res = await sendRequest({
    method: "GET",
    url: "/admin/reports",
  });
  return res;
}
