import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="flex flex-col h-auto bg-white px-36">
			<h2 className="text-4xl font-bold">Projects</h2>
			<h3>A few of my recent projects.</h3>
			<div className="flex flex-row flex-wrap justify-between">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
    )
}