import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {HiDocumentText} from 'react-icons/hi';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 dark:bg-zinc-950 text-base-content dark:text-zinc-100">
      <aside className='flex'>
        <p>Made with ❤️ by Kyle Thornton</p>
        <p> | {year}</p>
        <a href='https://github.com/KyleMThornton' target="_blank" rel="noopener noreferrer"><AiFillGithub className="text-xl hover:text-red-400" /></a>
        <a href='https://www.linkedin.com/in/kyle-m-thornton/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="text-xl hover:text-red-400" /></a>
        <a href="mailto:kylemthornton@gmail.com"><MdEmail className="text-xl hover:text-red-400" /></a>
        <a href=''><HiDocumentText className="text-xl hover:text-red-400" /></a>
      </aside>
    </footer>
  );
}
