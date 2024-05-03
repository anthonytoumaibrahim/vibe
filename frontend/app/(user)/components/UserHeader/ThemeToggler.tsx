"use client";

import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import Toggle from "@/components/Toggle";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center gap-6 justify-between">
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
