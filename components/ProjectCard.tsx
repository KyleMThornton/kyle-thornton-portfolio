import Image from "next/image";

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

interface ProjectCardProps {
  projectData: ProjectData;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {

  return (
    <div className="flex w-full group">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-96 object-cover group-hover:scale-105 group-hover:drop-shadow-sm transition-all duration-200 ease-in-out"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="p-4">
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-pink-500 to-red-800">
              {projectData.title}
            </h3>
          </a>
          <p className="text-gray-700 text-base">{projectData.description}</p>
          <div className="flex flex-wrap mt-3">
            {projectData.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
