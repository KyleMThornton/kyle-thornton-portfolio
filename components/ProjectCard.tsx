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
    <div className="flex p-4 max-w-2xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="p-4">
          <a href={projectData.link} target="_blank" rel="noopener noreferrer"><h3 className="font-bold text-2xl mb-2">{projectData.title}</h3></a>
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
