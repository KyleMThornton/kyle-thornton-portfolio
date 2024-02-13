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
    <div className="flex w-full group relative">
      <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
        <a href={projectData.link} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-full h-96 object-cover object-top group-hover:scale-105 group-hover:drop-shadow-sm transition-all duration-200 ease-in-out"
            src={projectData.image}
            alt={projectData.title}
            width={1000}
            height={1000}
          />
        </a>
        <div className="p-4">
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-pink-500 to-red-800">
              {projectData.title}
            </h3>
          </a>
          <p className="">{projectData.description}</p>
          <div className="flex flex-wrap mt-3 justify-between items-center">
            <div>
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
              <AiFillGithub className="text-5xl hover:text-red-400 absolute bottom-0 right-0 mb-4 mr-4 hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
