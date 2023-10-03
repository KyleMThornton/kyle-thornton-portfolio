import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {HiDocumentText} from 'react-icons/hi';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside className='flex'>
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/KyleMThornton" target="_blank">
            Kyle Thornton 
          </a>
        </p>
        <p> | © {year}</p>
        <AiFillGithub className="text-xl hover:text-red-400" />
        <AiFillLinkedin className="text-xl hover:text-red-400" />
        <MdEmail className="text-xl hover:text-red-400" />
        <HiDocumentText className="text-xl hover:text-red-400" />
      </aside>
    </footer>
  );
}
