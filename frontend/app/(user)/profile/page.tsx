import type { Metadata } from "next";
import { sendRequest } from "@/app/actions";
import axios from "axios";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  const response = await users.data;

  return <div>{response.map((u) => u.name)}</div>;
};

export default Profile;
