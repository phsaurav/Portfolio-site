import React from "react";
import useProjects from "../../../hooks/useProjects";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

const NewTopProjects = () => {
  const [projects] = useProjects();
  return (
    <div className='mx-auto xl:w-9/12'>
      <h1 className='text-brand-3 mt-10 mb-2 text-2xl font-light uppercase md:text-3xl'>
        Some of my latest work
      </h1>
      <div className='flex justify-center'>
        <div className='border-brand-3 mb-10 h-px w-20 border-b'></div>
      </div>
      {projects
        // @ts-ignore
        .slice(0, 4)
        .map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
    </div>
  );
};

export default NewTopProjects;
