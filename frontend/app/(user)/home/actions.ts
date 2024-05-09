import { sendRequest } from "@/app/actions";

export async function getFeed() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/feed",
  });
  return response;
}
