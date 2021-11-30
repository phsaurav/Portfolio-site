import React from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import useProjects from "../../../hooks/useProjects";

const TopProjects = () => {
	const [projects] = useProjects();
	return (
		<div>
			<h1 className='mt-10 mb-2 text-3xl font-light text-brand-3 uppercase'>Some of my latest work</h1>
			<div className='flex justify-center'>
				<div className=' bg-brand-3 h-px w-20 mb-10'></div>
			</div>
			<div className='flex justify-center items-center container mx-auto gap-20 lg:gap-20 flex-wrap'>
				{projects.slice(0, 3).map((project) => (
					<ProjectCard key={project.key} project={project}></ProjectCard>
				))}
			</div>
		</div>
	);
};

export default TopProjects;
