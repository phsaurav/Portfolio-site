import React from "react";
import Typical from "react-typical";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Skills from "../../../components/Skills/Skills";
import { RESUME_LINK } from "../../../utils/constants";

const AboutMe = () => {
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
            name: "Flutter",
            // svg: '',
            faClass: "fab fa-android",
        },
        {
            name: "Django",
            faClass: "fab fa-python",
        },
        {
            name: "HTML5",
            faClass: "fab fa-html5",
        },
        {
            name: "CSS3",
            // svg: '',
            faClass: "fab fa-css3",
        },

        {
            name: "Node",
            // svg: '',
            faClass: "fab fa-node",
        },

        {
            name: "Express",
            // svg: '',
            faClass: "fas fa-cogs",
        },

        {
            name: "PostgreSQL",
            // svg: '',
            faClass: "fas fa-database",
        },
        {
            name: "SASS",
            // svg: '',
            faClass: "fab fa-sass",
        },
    ];
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <div>
                <Header></Header>
                <div className='mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className=''>
                            <img
                                className=' h-96 object-cover object-top md:min-h-screen'
                                src='https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                alt=''
                            />
                        </div>
                        <div className='flex justify-center bg-white p-10' data-aos='zoom-in-up'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='max-w-xl '>
                                    <div className=' border-brand-5 border-b-4 pb-5'>
                                        <h1 className='text-brand-4 text-5xl font-semibold uppercase lg:text-6xl '>
                                            PH Saurav
                                        </h1>
                                        <div
                                            className='text-brand-5 text-xl font-semibold md:text-2xl xl:mb-0'
                                            style={{ fontFamily: "'Cutive Mono', monospace" }}
                                        >
                                            <Typical
                                                steps={[
                                                    "A Full Stack Developer",
                                                    3000,
                                                    "A UI/UX & Graphic Designer",
                                                    3000,
                                                    "An Enthusiast",
                                                    3000,
                                                ]}
                                                loop={Infinity}
                                            />
                                        </div>
                                    </div>
                                    <p className='text-brand-5 mx-6 mt-5  text-lg font-light md:mx-0 md:text-xl'>
                                        I am a full-stack software developer with a passion for
                                        creating exceptional web and mobile applications, I have
                                        extensive experience in building comprehensive web apps and
                                        websites using ReactJS/NextJS, and complex backend
                                        applications with Django Rest Framework. Proficiency in
                                        Flutter for building high-quality Android and iOS
                                        applications and publish them on Playstore and Appstore. I'm
                                        also skilled in designing, and I enjoy bringing innovative
                                        ideas to life. If you're looking for a dedicated developer
                                        with a proven track record of delivering outstanding
                                        results, feel free to connect with me.
                                    </p>
                                    <div className='flex justify-center'>
                                        <a href={RESUME_LINK}>
                                            <div className='text-brand-3  hover:bg-brand-4 bg-brand-white  border-brand-3 mt-10 ml-28 mb-10 mr-28 w-60 transform cursor-default border-2 py-2 px-6 text-center uppercase shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:text-white hover:shadow-xl md:border-2 md:px-6 '>
                                                Resume Download
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className='row skills flex flex-wrap justify-center'>
                                        {skillsBar.map((x) => (
                                            <Skills
                                                key={x.name}
                                                faClass={x.faClass}
                                                svg={x.svg}
                                                label={x.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full  flex-col'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutMe;
