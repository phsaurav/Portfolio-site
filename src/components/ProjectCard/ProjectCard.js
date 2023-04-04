import React from "react";
import { Link } from "react-router-dom";
import { skillSet } from "../../utils/constants";

const ProjectCard = ({ project }) => {
  const { id, title, subtitle, description, images, skills, linkes } = project;
  return (
    <div>
      <div className='flex overflow-hidden'>
        <div
          className='w-1/2 bg-cover'
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        ></div>
        <div className='w-1/2 pl-5 text-left '>
          <h1 className='text-brand-3 text-2xl font-bold md:text-3xl'>{title}</h1>
          <p className='text-brand-3 text-xl'>{subtitle}</p>
          <p className='text-brand-5 mt-2 hidden text-sm md:block lg:text-base '>{description}</p>

          <div className='mt-5 flex flex-wrap gap-1'>
            {skills.map((skill) => {
              const skillData = skillSet.filter((item) => item.label == skill);
              return <img src={skillData[0].img} height={10} alt={skillData[0].label} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
