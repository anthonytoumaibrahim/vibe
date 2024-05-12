"use client";

import { useTheme } from "next-themes";
import Toggle from "@/components/Toggle";

const ThemeToggler = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`flex items-center gap-6 justify-between ${className}`}>
      <p>Dark Mode</p>
      <Toggle
        active={theme === "dark"}
        onChange={toggleTheme}
        label="Enable dark mode"
      />
    </div>
  );
};

export default ThemeToggler;
