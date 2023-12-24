import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="border-b-0 border-slate-500 border-solid sticky top-0 z-10 bg-zinc-100 dark:bg-zinc-950">
      <div className="p-4 container">
        <nav className="flex items-center justify-between">
          <a href=""><h1 className="text-3xl font-bold">&lt;KT /&gt;</h1></a>
          <div className="flex flex-row">
            <ul className="flex items-center justify-between space-x-4 pr-2">
              <li>
                <Link href="#projects" scroll={true} className="text-lg hover:underline hover:font-semibold">Projects</Link>
              </li>
              <li>
                <Link href="/files/KyleThorntonResume.pdf" scroll={true} className="text-lg hover:underline hover:font-semibold">Resume</Link>
              </li>
              <li>
                <a href="mailto:kylemthornton@gmail.com" className="text-lg hover:underline hover:font-semibold">Contact</a>
              </li>
            </ul>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </div>
  );
}
