import type { Metadata } from "next";
import { getProfile } from "./actions";
import Showcase from "./components/Showcase";
import Avatar from "../../components/Avatar";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile(params.username);
  const isOwner = profileData?.is_owner;

  return (
    <>
      <section className="flex gap-6">
        <Showcase
          bio={profileData?.bio}
          characterData={profileData?.character_data}
          isOwner={isOwner}
        />
        <div className="w-1/4">
          <div className="p-4 rounded-lg bg-slate-100">
            <div className="flex items-start gap-4">
              <Avatar url={profileData?.avatar_full} />
              <div>
                <h4>{profileData?.username}</h4>
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex "></section>
    </>
  );
};

export default Profile;
