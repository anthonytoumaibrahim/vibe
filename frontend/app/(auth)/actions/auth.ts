"use server";

import { cookies } from "next/headers";

export async function auth(jwt: string) {
  cookies().set("token", jwt);
}
