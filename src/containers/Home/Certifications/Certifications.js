import React from "react";

const Certifications = () => {
    const skillsBar = [
        {
            name: "ReactJs",
            // svg: '',
            faClass: "fab fa-react",
        },
        {
            name: "Javascript",
            // svg: '',
            faClass: "fab fa-js",
        },
        {
            name: "Python",
            faClass: "fab fa-python",
        },
        {
            name: "HTML5",
            // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
            // svg: ",
            faClass: "fab fa-html5",
        },
    ];
    return (
        <>
            <h1 className='text-brand-3 mt-10 mb-2 text-2xl font-light uppercase md:text-3xl'>
                Some of my latest work
            </h1>
            <div className='flex justify-center'>
                <div className='border-brand-3 mb-10 h-px w-20 border-b'></div>
            </div>
        </>
    );
};

export default Certifications;
