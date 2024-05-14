import { Metadata } from "next";
import { getStats } from "./actions";
import Statistic from "./components/Statistic";
import { FaUser, FaCrown, FaMessage, FaPen } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Admin Dashboard – Vibe",
};

const AdminPanel = async () => {
  const stats = await getStats();

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <Statistic count={stats?.users_count} icon={FaUser}>
        Users
      </Statistic>
      <Statistic count={stats?.premium_count} icon={FaCrown}>
        Premium Users
      </Statistic>
      <Statistic count={stats?.posts_count} icon={FaPen}>
        Posts
      </Statistic>
      <Statistic count={stats?.comments_count} icon={FaMessage}>
        Comments
      </Statistic>
      <Statistic count={stats?.handled_reports_count} icon={FaMessage}>
        Handled Reports
      </Statistic>
      <Statistic count={stats?.unhandled_reports_count} icon={FaMessage}>
        Unhandled Reports
      </Statistic>
    </div>
  );
};

export default AdminPanel;
