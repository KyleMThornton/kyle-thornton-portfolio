import ProjectCard from "./ProjectCard";
import { justALittleRedditData, midpointProjectData, portfolioData } from "./ProjectData";

export default function Projects() {
  return (
    <div className="flex flex-col container p-4 h-auto">
      <h2 className="text-4xl font-bold">Projects</h2>
      <h3 className="pb-5">A few of my recent projects.</h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <ProjectCard projectData={midpointProjectData} />
        <ProjectCard projectData={justALittleRedditData} />
        <ProjectCard projectData={portfolioData} />
      </div>
    </div>
  );
}
