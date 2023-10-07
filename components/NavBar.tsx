import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-4 pb-20 container">
      <nav className="flex items-center justify-between">
        <a href=""><h1 className="text-3xl font-bold">&lt;KT /&gt;</h1></a>
        <div className="flex flex-row">
          <ul className="flex items-center justify-between space-x-4 pr-5">
            <li>
              <Link href="#projects" scroll={true} className="text-lg hover:underline hover:font-semibold">Projects</Link>
            </li>
            <li>
              <a href="mailto:kylemthornton@gmail.com" className="text-lg hover:underline hover:font-semibold">Contact</a>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
