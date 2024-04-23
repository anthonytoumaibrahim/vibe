// Next stuff
import type { Metadata } from "next";
import Image from "next/image";

import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login – Vibe",
  description: "Rejoin the fun again by logging in to Vibe!",
};

const Login = () => {
  return (
    <MainLayout transparentHeader={true} showFooter={false}>
      <main className="h-screen w-full relative flex items-center justify-center">
        <Image
          src="/images/auth/login_bg.webp"
          alt=""
          className="-z-10 object-cover"
          sizes="100vw"
          quality={100}
          fill
          priority={true}
        />

        <section className="bg-white rounded-lg w-full max-w-md p-10 flex flex-col items-center shadow-xl">
          <h1 className="font-bold">Login</h1>

          <form action=""></form>

          <p className="text-slate-500">
            Don't have an account yet?{" "}
            <Link href="/signup">Join Vibe now!</Link>
          </p>
        </section>
      </main>
    </MainLayout>
  );
};

export default Login;
