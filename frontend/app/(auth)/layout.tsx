import Image from "next/image";
import MainLayout from "../layouts/MainLayout";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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

        <section className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-md p-10 flex flex-col gap-4 items-center shadow-xl">
          {children}
        </section>
      </main>
    </MainLayout>
  );
};

export default AuthLayout;
