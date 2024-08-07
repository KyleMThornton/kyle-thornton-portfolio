import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 dark:bg-zinc-950 text-base-content dark:text-zinc-100">
      <aside className="flex">
        <div className="flex">
          <p className="hidden sm:block">Made with ❤️ by</p>
          <p>&nbsp;Kyle Thornton</p>
          <p>&nbsp;| {year}</p>
        </div>
        <a
          href="https://github.com/KyleMThornton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-xl hover:text-red-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-m-thornton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-xl hover:text-red-400" />
        </a>
        <a href="mailto:kylemthornton@gmail.com">
          <MdEmail className="text-xl hover:text-red-400" />
        </a>
        {/* <a href='/files/KyleThorntonResume.pdf'><HiDocumentText className="text-xl hover:text-red-400" /></a> */}
      </aside>
    </footer>
  );
}
