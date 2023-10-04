import ProjectCard from "./ProjectCard";
import { justALittleRedditData, midpointProjectData, portfolioData } from "./ProjectData";

export default function Projects() {
  return (
    <div className="flex flex-col container p-4 pb-10 h-auto">
      <h2 className="text-4xl font-bold">Projects</h2>
      <h3 className="pb-5">A few of my recent projects.</h3>
      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
        <ProjectCard projectData={midpointProjectData} />
        <ProjectCard projectData={justALittleRedditData} />
        <ProjectCard projectData={portfolioData} />
        <ProjectCard projectData={justALittleRedditData} />
      </div>
    </div>
  );
}
