import type { Metadata } from "next";
import { getProfile } from "./actions";
import Showcase from "./components/Showcase";
import UserCard from "../../components/UserCard";
import Badges from "./components/Badges";
import Posts from "../../components/Posts";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile(params.username);
  const isOwner = profileData?.is_owner;

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col xl:flex-row gap-6">
        <Showcase
          bio={profileData?.bio}
          characterData={profileData?.character_data}
          isOwner={isOwner}
          backgrounds={profileData?.backgrounds}
          backgroundId={profileData?.profile_data?.background}
          isPremium={profileData?.is_premium}
        />
        <div className="xl:w-1/5 shrink-0 flex flex-col gap-6">
          <UserCard
            username={profileData?.username}
            id={profileData?.id}
            avatar={profileData?.avatar_full}
            isFriend={profileData?.is_friend}
            isOwner={isOwner}
            isPremium={profileData?.is_premium}
            isAdmin={profileData?.is_admin}
          />
          <Badges badgesData={profileData?.badges} />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6">
        <Posts
          user_id={profileData?.id}
          posts={profileData?.posts?.data}
          page_links={profileData?.posts?.links}
          is_owner={profileData?.is_owner}
        />
        <div className="w-1/5 shrink-0"></div>
      </section>
    </div>
  );
};

export default Profile;
