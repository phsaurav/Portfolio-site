import React from "react";
import { Link } from "react-router-dom";
import { skillSet } from "../../utils/constants";
import LinkedButton from "../LinkedButton/LinkedButton";

const InvertProjectCard = ({ project }) => {
  const { id, title, subtitle, description, images, skills, links } = project;
  return (
    <div>
      <div className='flex flex-col-reverse overflow-hidden lg:flex-row '>
        <div className='border-brand-5 flex w-full flex-col justify-between border-b-2 py-8 pr-5 text-center lg:w-1/2 lg:text-right '>
          <div>
            <h1 className='text-brand-3 trancate  text-2xl font-bold md:text-3xl'>{title}</h1>
            <p className='text-brand-3 text-xl lg:truncate'>{subtitle}</p>
            <p className='text-brand-5 line-clamp-4 mt-2   text-sm xl:text-base'>{description}</p>
          </div>
          <div>
            <div className='hidden flex-wrap justify-end gap-1 pt-5 opacity-80 transition duration-500 ease-in-out hover:opacity-100 md:flex '>
              {skills.map((skill) => {
                const skillData = skillSet.filter((item) => item.label == skill);
                return (
                  <img
                    src={skillData[0].img}
                    style={{ height: "26px", paddingLeft: "1px", paddingRight: "1px" }}
                    alt={skillData[0].label}
                  />
                );
              })}
            </div>
            <div className='mt-3 flex justify-center gap-3  lg:justify-end xl:mt-5'>
              {links.map((link) => (
                <LinkedButton link={link} />
              ))}
            </div>
          </div>
        </div>
        <div
          className=' border-brand-5  w-full border-b-2 border-r-2 bg-cover lg:w-1/2'
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default InvertProjectCard;
