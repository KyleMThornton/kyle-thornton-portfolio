import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function NewNavBar() {
  return (
    <div className="flex justify-center z-50">
      <div className="navbar bg-base-100 md:p-0 mb-5 top-2 fixed rounded-xl transition-all ease-in-out duration-200 bg-opacity-0 container">
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
              className="menu menu-lg dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="z-50">
                <a>Resume</a>
              </li>
              <li className="z-50">
                <a>Projects</a>
              </li>
              <li className="z-50">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold px-0 md:px-4">
            &lt;KT /&gt;
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
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
