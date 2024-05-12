import { sendRequest } from "@/app/actions";
import { revalidatePath } from "next/cache";

export async function getCheckoutUrl() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/premium-checkout",
  });
  return response;
}

export async function getPremiumItems() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/premium-items",
  });
  return response;
}

// TODO: For local testing only
export async function becomePremium() {
  const response = await sendRequest({
    method: "GET",
    url: "/user/checkout-success",
  });
  return response;
}
