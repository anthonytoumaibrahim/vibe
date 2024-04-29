import Image from "next/image";
import type { Metadata } from "next";
import { getCharacter } from "../../boarding/actions";
import Character from "../../2d_components/Character";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async ({ params }: { params: { username?: string } }) => {
  const characterData: any = await getCharacter();
  const isOwner = params?.username ? false : true;

  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-6">
        <div className="w-full relative h-[560px] rounded-lg overflow-hidden">
          <Image
            src="/images/profile_bg/1.webp"
            fill
            alt=""
            className="object-cover"
            sizes="100%"
          />
          <Character
            data={characterData?.data}
            scale={0.65}
            className="mt-10"
          />
        </div>

        <div className="w-1/4">{params?.username}</div>
      </section>

      <section className="flex gap-6">
        <div className="p-6 rounded-lg bg-slate-50 w-full">
          <h4 className="text-center">About Me</h4>
        </div>
        <div className="w-1/4">{params?.username}</div>
      </section>
    </div>
  );
};

export default Profile;
