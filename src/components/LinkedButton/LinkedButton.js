import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { SiAppstore } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa";

const icons = {
  "Live Site": <MdWeb size={24} />,
  "Git Repo": <RiGithubFill size={24} />,
  "Play Store": <FaGooglePlay size={24} />,
  "App Store": <SiAppstore size={24} />,
};

const LinkedButton = ({ link }) => {
  return (
    <div>
      <a href={link.url}>
        <div className='text-brand-3  hover:bg-brand-4 bg-brand-white  border-brand-3 flex transform cursor-default border-2 px-5 py-2 text-center uppercase transition duration-500  ease-in-out hover:text-white md:border-2 xl:mt-3 '>
          <div className='mr-2'>{icons[link.Label]}</div>
          <div className=' font-medium'>{link.Label}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkedButton;
