import { sendRequest } from "@/app/actions";

export async function getCheckoutUrl() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/premium-checkout",
  });
  return response;
}
