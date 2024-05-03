// Next stuff
import type { Metadata } from "next";
import Image from "next/image";

import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";
import SignupForm from "./components/SignupForm";

export const metadata: Metadata = {
  title: "Signup – Vibe",
  description:
    "Join Vibe today! Get started by entering your information, then head straight to creating your 2D character!",
};

export default function Signup() {
  return (
    <>
      <h1>Join Vibe</h1>

      <SignupForm />

      <p className="text-slate-500 dark:text-slate-400">
        Already a member? <Link href="/login">Login now</Link>
      </p>
    </>
  );
}
