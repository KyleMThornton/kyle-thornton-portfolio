import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

interface ProjectCardProps {
  projectData: ProjectData;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  return (
    <div className="flex group m-2">
      <div className="bg-white dark:bg-zinc-800 w-88 h-52 shadow-lg rounded-lg overflow-hidden relative">
        <div className="p-3">
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-pink-500 to-red-800">
              {projectData.title}
            </h3>
          </a>
          <p>Example project data</p>
        </div>
        <div className="flex flex-wrap justify-between items-center absolute bottom-0 w-full p-2">
          <div className="w-2/3">
            {projectData.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-zinc-900 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-5xl hover:text-red-400 hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
