import { Metadata } from "next";
import { getUsers } from "../actions";

export const metadata: Metadata = {
  title: "Users - Admin Dashboard – Vibe",
};

const AdminUsers = async () => {
  const users = getUsers();

  return <div>AdminUsers</div>;
};

export default AdminUsers;
