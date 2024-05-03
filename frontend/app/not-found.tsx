import MainLayout from "./layouts/MainLayout";

import Button from "@/components/Button";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-2 w-screen h-screen">
      <h1 className="text-8xl text-primary-main font-bold">404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you requested could not be found.</p>
      <Button href="/" className="mt-4">
        Back to homepage
      </Button>
    </main>
  );
};

export default NotFound;
