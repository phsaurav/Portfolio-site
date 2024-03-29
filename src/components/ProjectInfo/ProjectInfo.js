import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router";
import useProjects from "../../hooks/useProjects";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ProjectInfo = () => {
    const { id } = useParams();
    const [projects] = useProjects();

    const selectedProject = projects.filter((project) => String(project.id) === id);

    const images = [
        selectedProject[0]?.images[0],
        selectedProject[0]?.images[1],
        selectedProject[0]?.images[2],
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1900 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1900, min: 1600 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 1600, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <div>
                <Header></Header>
                <h1 className='text-brand-3 mt-10 text-3xl font-light uppercase'>
                    {selectedProject[0]?.title}
                </h1>
                <p className='text-brand-5 text-lg font-light'>{selectedProject[0]?.subtitle}</p>
                <div className='flex justify-center'>
                    <div className='border-brand-3 mb-8 mt-4 h-px w-20 border-b'></div>
                </div>
                <div className='cursor-default '>
                    <div className='bg-brand-3 border-brand-3 mx-auto w-full border-t-2 border-b-2 md:h-full'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            transitionDuration={500}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        >
                            {images.map((image) => (
                                <div className=' md:h-xl mx-auto flex h-full justify-center '>
                                    <img className='object-contain' src={image} alt='' />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className='mt-10 flex justify-center gap-10'>
                    {selectedProject[0]?.links.map((link) => (
                        <div className='mb-5 flex justify-center'>
                            <a
                                href={link.url}
                                className='border-brand-4 bg-brand-4 hover:border-brand-4 hover:text-brand-4 mt-5 transform cursor-default  rounded-full border-2 p-3 text-2xl text-white transition duration-500 ease-in-out hover:-translate-y-2 hover:bg-white hover:shadow-xl'
                            >
                                <div className='flex'>
                                    {link.Label === "Git Repo" ? (
                                        <BsGithub />
                                    ) : link.Label === "Play Store" ? (
                                        <IoLogoGooglePlaystore />
                                    ) : link.label === "App Store" ? (
                                        <FaAppStore />
                                    ) : (
                                        <CgWebsite />
                                    )}
                                    <span className='ml-2 text-base'>{link.Label}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex w-full  flex-col'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProjectInfo;
