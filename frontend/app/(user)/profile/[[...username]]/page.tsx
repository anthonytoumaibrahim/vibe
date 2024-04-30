import Image from "next/image";
import type { Metadata } from "next";
import { getProfile } from "./actions";
import { getCharacter } from "../../boarding/actions";
import Character from "../../2d_components/Character";
import AboutMe from "./components/AboutMe";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const profileData: any = await getProfile();
  const isOwner = params?.username ? false : true;

  return (
    <div className="flex flex-col gap-6">
      <section className="w-full relative h-[640px] rounded-lg overflow-hidden">
        <Image
          src="/images/profile_bg/1.webp"
          fill
          alt=""
          className="object-cover"
          sizes="100%"
        />
        <Character
          data={profileData?.character_data}
          scale={0.65}
          className="mt-10"
        />
      </section>

      <section className="flex gap-6">
        <div className="p-6 rounded-lg bg-slate-50 w-full">
          <h4 className="text-center">About Me</h4>
          <AboutMe bio={profileData?.bio} />
        </div>
        <div className="w-1/4">{params?.username}</div>
      </section>
    </div>
  );
};

export default Profile;
