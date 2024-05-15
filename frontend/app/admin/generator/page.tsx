import { Metadata } from "next";
import GenerateButton from "./components/GenerateButton";

export const metadata: Metadata = {
  title: "Data Generator - Admin Dashboard – Vibe",
};

const AdminGenerator = () => {
  return (
    <>
      <h1 className="mb-4">Generator</h1>
      <p className="mb-4">
        Generate data (users, posts, etc.) for Vibe using AI.
      </p>
      <GenerateButton />
    </>
  );
};

export default AdminGenerator;
