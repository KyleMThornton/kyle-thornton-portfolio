import ProjectCard from "./ProjectCard";
import { justALittleRedditData, midpointProjectData } from "./ProjectData";

export default function Projects() {
  return (
    <div className="flex flex-col container p-4 h-auto">
      <h2 className="text-4xl font-bold">Projects</h2>
      <h3>A few of my recent projects.</h3>
      <div className="flex flex-row flex-wrap justify-between">
        <ProjectCard projectData={midpointProjectData} />
        <ProjectCard projectData={justALittleRedditData} />
      </div>
    </div>
  );
}
