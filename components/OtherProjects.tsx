import {
  justALittleRedditData,
  midpointProjectData,
  entertainmentDatabaseData,
  budgetData,
} from "./ProjectData";

import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  return (
    <div
      className="flex flex-col container p-4 pb-10 h-auto"
      id="otherprojects"
    >
      <h2 className="text-4xl font-semibold">Additional Projects</h2>
      <h3 className="pb-5">A few more projects.</h3>
      <div className="flex flex-wrap justify-center">
        <OtherProjectCard projectData={justALittleRedditData} />
        <OtherProjectCard projectData={midpointProjectData} />
        <OtherProjectCard projectData={entertainmentDatabaseData} />
        <OtherProjectCard projectData={budgetData} />
      </div>
    </div>
  );
}
