import { sendRequest } from "../actions";

export async function getStats() {
  const response = await sendRequest({
    method: "GET",
    url: "/admin/stats",
  });
  return response;
}

export async function getUsers() {
  const response = await sendRequest({
    method: "GET",
    url: "/admin/users",
  });
  return response;
}
