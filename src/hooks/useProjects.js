import { useEffect, useState } from "react";

const useProjects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("/new_projects.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);

	return [projects, setProjects];
};

export default useProjects;
