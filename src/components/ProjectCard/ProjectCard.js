import React from "react";
import { skillSet } from "../../utils/constants";
import LinkedButton from "../LinkedButton/LinkedButton";

const ProjectCard = ({ project }) => {
  const { title, subtitle, description, images, skills, links } = project;
  return (
    <div>
      <div className='flex flex-col overflow-hidden lg:flex-row'>
        <div
          className=' border-brand-5 w-full border-l-2 bg-cover lg:w-1/2 lg:border-b-2'
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        ></div>
        <div className='border-brand-5 border-left-2 flex w-full flex-col justify-between border-l-2 border-b-2 py-8 pl-5  text-center lg:w-1/2 lg:border-l-0 lg:text-left'>
          <div>
            <h1 className='text-brand-3 text-2xl font-bold md:text-3xl'>{title}</h1>
            <p className='text-brand-3 text-xl lg:truncate'>{subtitle}</p>
            <p className='text-brand-5 mt-2  text-sm xl:text-base '>{description}</p>
          </div>

          <div>
            <div className='hidden flex-wrap gap-1 pt-2 opacity-80 transition duration-500 ease-in-out hover:opacity-100 md:flex xl:pt-5 '>
              {skills.map((skill) => {
                const skillData = skillSet.filter((item) => item.label === skill);
                return (
                  <div>
                    <img
                      src={skillData[0].img}
                      style={{ height: "26px", paddingLeft: "1px", paddingRight: "1px" }}
                      alt={skillData[0].label}
                    />
                  </div>
                );
              })}
            </div>
            <div className='mt-3 flex justify-center gap-3 lg:justify-start xl:mt-5'>
              {links.map((link) => (
                <LinkedButton link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
