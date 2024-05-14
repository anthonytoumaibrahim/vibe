import { Metadata } from "next";
import { getReport } from "../actions";
import Link from "next/link";
import ActionButtons from "./components/ActionButtons";
import Post from "./components/Post";

export const metadata: Metadata = {
  title: "Handle Report - Admin Dashboard – Vibe",
};

type ReportableType = {
  id: number;
  reason: string;
  handled: boolean;
  reportable: {
    id: number;
    content: string;
    user_id: number;
    time_ago: string;
    user: {
      id: number;
      username: string;
      is_premium: boolean;
    };
    images: Array<{ id: number; src: string }>;
  };
  user: {
    id: number;
    username: string;
    is_premium: boolean;
  };
};

const AdminReportPage = async ({ params }: { params: { id: number } }) => {
  const { id, reason, reportable, handled, user }: ReportableType =
    await getReport(params.id);

  return (
    <>
      <h1 className="mb-4">Handle Report</h1>
      <div className="flex flex-col gap-2">
        <p>
          <Link
            href={`/profile/${reportable?.user?.username}`}
            target="_blank"
            className={`unstyled-link font-bold ${
              reportable?.user?.is_premium ? "premium-text" : ""
            }`}
          >
            {reportable?.user?.username}
          </Link>{" "}
          posted, {reportable?.time_ago}:
        </p>
        <Post images={reportable?.images}>{reportable?.content}</Post>
        <p>
          <Link
            href={`/profile/${user?.username}`}
            target="_blank"
            className={`unstyled-link font-bold ${
              user?.is_premium ? "premium-text" : ""
            }`}
          >
            {user?.username}
          </Link>{" "}
          reported this post, with stated reason: <strong>{reason}</strong>
        </p>

        <h4>How would you like to handle the report?</h4>
        {handled ? (
          <p className="text-emerald-600 font-bold">
            This report has been handled.
          </p>
        ) : (
          <ActionButtons id={id} />
        )}
      </div>
    </>
  );
};

export default AdminReportPage;
