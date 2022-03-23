import { useEffect, useState } from "react";

const useProjects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("https://ph-portfolio-api.herokuapp.com/api/project/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);

	return [projects, setProjects];
};

export default useProjects;
