"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NewNavBar() {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const currentOpacity = window.scrollY > 50 ? 1 : 0;
      setNavbarOpacity(currentOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center z-50">
      <div
        className="navbar m-5 fixed rounded-xl transition-all ease-in-out duration-200 z-50 container"
        style={{
          backgroundColor: isDark
            ? `rgba(44, 52, 58, ${navbarOpacity})` // Dark mode RGB values
            : `rgba(228, 228, 231, ${navbarOpacity})`, // Light mode RGB values
        }}
      >
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li className="">
                <Link href="/files/KyleThorntonResume.pdf">Resume</Link>
              </li>
              <li className="">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("projects");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="">
                <a href="mailto:kylemthornton@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl font-bold px-0 md:px-4">&lt;KT /&gt;</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {/* <li>
              <Link href="/files/KyleThorntonResume.pdf">Resume</Link>
            </li> */}
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="mailto:kylemthornton@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
