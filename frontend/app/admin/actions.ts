import { sendRequest } from "../actions";

export async function getUsers() {
  const response = await sendRequest({
    method: "GET",
    url: "/admin/users",
  });
  return response;
}
