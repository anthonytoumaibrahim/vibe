// Next stuff
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MainLayout from "../../layouts/MainLayout";

import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Login – Vibe",
  description: "Rejoin the fun again by logging in to Vibe!",
};

const Login = () => {
  return (
    <>
      <h1>Login</h1>

      <LoginForm />

      <p className="text-slate-500 dark:text-slate-400">
        Don&apos;t have an account yet?{" "}
        <Link href="/signup">Join Vibe now!</Link>
      </p>
    </>
  );
};

export default Login;
