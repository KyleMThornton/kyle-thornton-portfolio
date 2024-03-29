import ProjectCard from "./ProjectCard";
import {
  justALittleRedditData,
  midpointProjectData,
  entertainmentDatabaseData,
  budgetData,
} from "./ProjectData";

export default function Projects() {
  return (
    <div className="flex flex-col container p-4 pb-10 h-auto" id="projects">
      <h2 className="text-4xl font-semibold">Projects</h2>
      <h3 className="pb-5">A few of my recent projects.</h3>
      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
        <ProjectCard projectData={midpointProjectData} />
        <ProjectCard projectData={entertainmentDatabaseData} />
        <ProjectCard projectData={justALittleRedditData} />
        <ProjectCard projectData={budgetData} />
      </div>
    </div>
  );
}
