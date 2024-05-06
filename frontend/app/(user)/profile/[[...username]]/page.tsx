import type { Metadata } from "next";
import { getProfile } from "./actions";
import Showcase from "./components/Showcase";
import UserCard from "./components/UserCard";
import MyPosts from "./components/MyPosts";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile(params.username);
  const isOwner = profileData?.is_owner;

  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-6">
        <Showcase
          bio={profileData?.bio}
          characterData={profileData?.character_data}
          isOwner={isOwner}
          backgrounds={profileData?.backgrounds}
          backgroundId={profileData?.profile_data?.background}
        />
        <div className="w-1/5 shrink-0">
          <UserCard
            username={profileData?.username}
            id={profileData?.id}
            avatar={profileData?.avatar_full}
            isFriend={profileData?.is_friend}
            isOwner={isOwner}
          />
        </div>
      </section>

      <section className="flex gap-6">
        <MyPosts posts={profileData?.posts} />
        <div className="w-1/5 shrink-0"></div>
      </section>
    </div>
  );
};

export default Profile;
