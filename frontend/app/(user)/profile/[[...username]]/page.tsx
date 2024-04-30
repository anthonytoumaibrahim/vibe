import type { Metadata } from "next";
import { getProfile } from "./actions";
import AboutMe from "./components/AboutMe";
import Showcase from "./components/Showcase";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile();
  const isOwner = params?.username ? false : true;

  return (
    <div className="flex flex-col gap-6">
      <Showcase character_data={profileData?.character_data} />

      <section className="flex gap-6">
        <div className="p-6 rounded-lg bg-slate-50 w-full">
          <AboutMe bio={profileData?.bio} isOwner={isOwner} />
        </div>
        <div className="w-1/4">{params?.username}</div>
      </section>
    </div>
  );
};

export default Profile;
