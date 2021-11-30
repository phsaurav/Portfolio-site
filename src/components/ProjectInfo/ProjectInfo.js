import React from "react";
import { useParams } from "react-router";
import useProjects from "../../hooks/useProjects";

const ProjectInfo = () => {
	const { key } = useParams();
	const [projects] = useProjects();

	const selectedProject = projects.filter((project) => project.key === key);
	
	return (
		<div>
			<h1>This is for project: {key}</h1>
		</div>
	);
};

export default ProjectInfo;
