import type { Metadata } from "next";
import { getProfile } from "./actions";
import Showcase from "./components/Showcase";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile(params.username);
  const isOwner = profileData?.is_owner;

  return (
    <Showcase
      bio={profileData?.bio}
      characterData={profileData?.character_data}
      isOwner={isOwner}
    />
  );
};

export default Profile;
