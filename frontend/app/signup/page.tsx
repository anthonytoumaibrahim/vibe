// Next stuff
import type { Metadata } from "next";
import Image from "next/image";

import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signup – Vibe",
  description:
    "Join Vibe today! Get started by entering your information, then head straight to creating your 2D character!",
};

const Signup = () => {
  return (
    <MainLayout transparentHeader={true} showFooter={false}>
      <main className="h-screen w-full relative flex items-center justify-center">
        <Image
          src="/images/auth_bg.webp"
          alt=""
          className="-z-10 object-cover"
          sizes="100vw"
          quality={100}
          fill
          priority={true}
        />

        <section className="bg-white rounded-lg w-full max-w-md p-10 flex flex-col items-center shadow-xl">
          <h1 className="font-bold">Join Vibe</h1>

          <form action=""></form>

          <Link href="/login">Already have an account?</Link>
        </section>
      </main>
    </MainLayout>
  );
};

export default Signup;
