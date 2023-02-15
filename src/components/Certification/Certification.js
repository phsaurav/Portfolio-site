import React from "react";

const Certification = ({ label, link, svg }) => {
    return (
        <div
            data-aos='zoom-in-up'
            data-aos-duration='1000'
            className='transition duration-500 ease-in-out hover:-translate-y-2 '
        >
            <a href={link}>
                <div className='col-3 col-sm-2 hover:text-brand-4 mx-8 my-5 inline h-24 w-24 transform text-sm text-gray-500 '>
                    {svg}
                    <h6 className='text mt-2 text-center text-lg '>{label}</h6>
                </div>
            </a>
        </div>
    );
};

export default Certification;
