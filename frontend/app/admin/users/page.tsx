import { Metadata } from "next";
import { getUsers } from "../actions";
import UsersTable from "./components/UsersTable";

export const metadata: Metadata = {
  title: "Users - Admin Dashboard – Vibe",
};

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <>
      <h1 className="mb-4">Users</h1>
      <UsersTable data={users} />
    </>
  );
};

export default AdminUsers;
