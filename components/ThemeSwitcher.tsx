"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  return (
    <div className="flex">
      <button onClick={handleClick}>{theme === "light" ? <BiSun className="text-2xl" /> : <BiMoon className="text-2xl" />}</button>
    </div>
  );
};