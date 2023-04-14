import React from "react";
import Certification from "../../../components/Certification/Certification";
import { certificationList } from "../../../utils/constants";

const Certifications = () => {
  return (
    <>
      <h1 className='text-brand-3 mt-10 mb-2 text-2xl font-light uppercase md:text-3xl'>
        Certifications & Achivements
      </h1>
      <div className='flex justify-center'>
        <div className='border-brand-3 mb-10 h-px w-20 border-b'></div>
      </div>
      <div>
        <div className='row ml-3 flex flex-col flex-wrap items-center justify-center lg:flex-row'>
          {certificationList.map((x) => (
            <div className='w-72 transition duration-500 ease-in-out hover:-translate-y-6 '>
              <Certification link={x.link} key={x.name} svg={x.svg} label={x.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certifications;
