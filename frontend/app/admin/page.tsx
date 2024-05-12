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
    <div className="grid grid-cols-4 gap-6">
      <Statistic count={stats?.users_count} icon={FaUser} accent="primary">
        Users
      </Statistic>
      <Statistic count={stats?.premium_count} icon={FaCrown} accent="premium">
        Premium Users
      </Statistic>
      <Statistic count={stats?.posts_count} icon={FaPen} accent="sky">
        Posts
      </Statistic>
      <Statistic
        count={stats?.comments_count}
        icon={FaMessage}
        accent="emerald"
      >
        Comments
      </Statistic>
    </div>
  );
};

export default AdminPanel;
