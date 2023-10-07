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


  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
      <BiSun className="swap-on fill-current text-2xl" />
      <BiMoon className="swap-off fill-current text-2xl" />
    </label>
  );
};