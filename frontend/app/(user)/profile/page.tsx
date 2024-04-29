import type { Metadata } from "next";
import { sendRequest } from "@/app/actions";
import axios from "axios";
import { getCharacter } from "../boarding/actions";
import Character from "../2d_components/Character";

export const metadata: Metadata = {
  title: "Profile – Vibe",
};

const Profile = async () => {
  const characterData: any = await getCharacter();

  return <Character data={characterData?.data} scale={0.5} />;
};

export default Profile;
