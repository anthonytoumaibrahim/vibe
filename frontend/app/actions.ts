"use server";

import axios from "axios";
import type { AxiosError } from "axios";
import { cookies } from "next/headers";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

type RequestParams = {
  method: "GET" | "POST" | "DELETE" | "PUT";
  url: string;
  body?: object | Array<any> | string | undefined;
};

export async function sendRequest({
  method = "GET",
  url,
  body,
}: RequestParams) {
  let output: any = {};
  let unauthorized: boolean = false;

  try {
    const response = await axios({
      method: method,
      url: url,
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
      data: body,
    });

    output = response.data;
  } catch (error: any) {
    output = {
      success: false,
      message: "Sorry, something went wrong.",
    };
    if (axios.isAxiosError(error)) {
      output = {
        success: false,
        ...error?.response?.data,
      };
      if (error.response?.status === 401) {
        unauthorized = true;
      }
    }
  }

  return output;
}
