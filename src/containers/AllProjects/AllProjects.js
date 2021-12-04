import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useProjects from "../../hooks/useProjects";

const AllProjects = () => {
	const [projects] = useProjects();
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div>
				<Header></Header>
				<div>
					<h1 className='mt-10 mb-2 md:text-3xl text-2xl font-light text-brand-3 uppercase'>
						Some of my latest work
					</h1>
					<div className='flex justify-center'>
						<div className=' bg-brand-3 h-px w-20 mb-10'></div>
					</div>
					<div className='flex justify-center items-center container mx-auto gap-20 lg:gap-20 flex-wrap'>
						{projects.map((project) => (
							<ProjectCard key={project.key} project={project}></ProjectCard>
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-col  w-full'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AllProjects;
