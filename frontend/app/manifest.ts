import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vibe",
    short_name: "Vibe",
    description:
      "An immersive social media website where you can be yourself and connect with others.",
    theme_color: "#6c2a9f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
