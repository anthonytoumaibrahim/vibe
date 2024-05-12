import { Metadata } from "next";
import { getUsers } from "../actions";
import UsersTable from "./components/UsersTable";

export const metadata: Metadata = {
  title: "Users - Admin Dashboard – Vibe",
};

const AdminUsers = async () => {
  const users = await getUsers();

  return <UsersTable data={users} />;
};

export default AdminUsers;
