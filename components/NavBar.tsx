import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-4 pb-10 md:pb-20 container">
      <nav className="flex items-center justify-between">
        <a href=""><h1 className="text-xl md:text-3xl font-bold">&lt;KT /&gt;</h1></a>
        <div className="flex flex-row">
          <ul className="flex items-center justify-between space-x-2 md:space-x-4 md:pr-2 text-md md:text-lg">
            <li>
              <Link href='/files/KyleThorntonResume.pdf' className="underline-animation">Resume</Link>
            </li>
            <li>
              <Link href="#projects" scroll={true} className="underline-animation">Projects</Link>
            </li>
            <li>
              <a href="mailto:kylemthornton@gmail.com" className="underline-animation">Contact</a>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
