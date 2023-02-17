import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { id, title, subtitle, images } = project;
    return (
        <div>
            <Link to={`/project/${id}`}>
                <div className='container mx-auto my-2 w-80 transform overflow-hidden bg-white shadow-lg  transition duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl md:w-96'>
                    <div
                        className='relative z-10'
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))" }}
                    >
                        <div className='absolute inset-0 bg-black bg-opacity-20 transition duration-300 ease-in-out group-hover:opacity-75'></div>
                        <img className='w-full hover:object-fill' src={images[0]} alt='' />
                    </div>
                    <div className='pt-3 pb-8 text-center text-gray-600'>
                        <p className='font-base text-3xl'>{title}</p>
                        <p className='truncate px-5 text-sm font-light'>{subtitle}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
