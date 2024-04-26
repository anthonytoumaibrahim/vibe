// Next stuff
import type { Metadata } from "next";
import Image from "next/image";

import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";
import SignupForm from "./components/SignupForm";

import { GoogleLogin } from "@react-oauth/google";

export const metadata: Metadata = {
  title: "Signup – Vibe",
  description:
    "Join Vibe today! Get started by entering your information, then head straight to creating your 2D character!",
};

export default function Signup() {
  return (
    <MainLayout transparentHeader={true} showFooter={false}>
      <main className="h-screen w-full relative flex items-center justify-center">
        <Image
          src="/images/auth/signup_bg.webp"
          alt=""
          className="-z-10 object-cover"
          quality={100}
          fill
          priority={true}
        />

        <section className="bg-white rounded-lg w-full max-w-md p-10 flex flex-col gap-4 items-center shadow-xl">
          <h1>Join Vibe</h1>

          <SignupForm />

          <p className="text-slate-500">
            Already a member? <Link href="/login">Login now</Link>
          </p>
        </section>
      </main>
    </MainLayout>
  );
}
