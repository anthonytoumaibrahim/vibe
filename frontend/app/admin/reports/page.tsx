import { Metadata } from "next";
import { getReports } from "./actions";
import ReportsTable from "./components/ReportsTable";

export const metadata: Metadata = {
  title: "Reports - Admin Dashboard – Vibe",
};

const AdminReports = async () => {
  const reports = await getReports();

  return (
    <>
      <h1 className="mb-4">Reports</h1>
      <ReportsTable data={reports?.reports} />
    </>
  );
};

export default AdminReports;
