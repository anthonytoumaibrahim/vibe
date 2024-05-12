import { Metadata } from "next";
import { getUsers } from "./actions";

export const metadata: Metadata = {
  title: "Admin Dashboard – Vibe",
};

const AdminPanel = async () => {
  const users = getUsers();

  return <div>AdminPanel</div>;
};

export default AdminPanel;
