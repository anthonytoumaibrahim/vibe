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
      {reports?.reports?.length === 0 ? (
        <p>No reports to show at this time.</p>
      ) : (
        <ReportsTable data={reports?.reports} />
      )}
    </>
  );
};

export default AdminReports;
