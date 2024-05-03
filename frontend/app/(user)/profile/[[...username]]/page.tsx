import type { Metadata } from "next";
import { getProfile } from "./actions";
import Showcase from "./components/Showcase";
import UserCard from "./components/UserCard";

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
          <UserCard
            username={profileData?.username}
            avatar={profileData?.avatar_full}
            isFriend={profileData?.is_friend}
            isOwner={isOwner}
          />
        </div>
      </section>

      <section className="flex "></section>
    </>
  );
};

export default Profile;
