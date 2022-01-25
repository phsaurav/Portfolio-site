import React from "react";
import { useParams } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useProjects from "../../hooks/useProjects";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const ProjectInfo = () => {
	const { key } = useParams();
	const [projects] = useProjects();

	const selectedProject = projects.filter((project) => project.key === key);
	const images = [selectedProject[0]?.img1, selectedProject[0]?.img2, selectedProject[0]?.img3];

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
		<div className='min-h-screen flex flex-col justify-between'>
			<div>
				<Header></Header>
				<h1 className='mt-10 text-3xl font-light text-brand-3 uppercase'>
					{selectedProject[0]?.title}
				</h1>
				<p className='text-lg font-light text-brand-5'>{selectedProject[0]?.subtitle}</p>
				<div className='flex justify-center'>
					<div className='border-brand-3 h-px w-20 mb-8 border-b mt-4'></div>
				</div>
				<div className='cursor-default '>
					<div className='md:h-full w-full mx-auto bg-brand-3 border-t-2 border-b-2 border-brand-3'>
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
								<div className=' flex justify-center mx-auto md:h-xl h-full '>
									<img className='object-contain' src={image} alt='' />
								</div>
							))}
						</Carousel>
					</div>
				</div>
				<div className='flex justify-center gap-10 mt-10'>
					<div className='flex justify-center mb-5'>
						<a
							href={selectedProject[0]?.liveLink}
							className='rounded-full border-brand-4 text-white text-2xl p-3 mt-5 bg-brand-4  hover:bg-white hover:border-brand-4 border-2 hover:text-brand-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-default'
						>
							<div className='flex'>
								<CgWebsite /> <span className='text-base ml-2'>Live Site</span>
							</div>
						</a>
					</div>
					<div className='flex justify-center mb-5'>
						<a
							href={selectedProject[0]?.gitLink}
							className='rounded-full border-brand-4 text-white text-2xl p-3 mt-5 bg-brand-4  hover:bg-white hover:border-brand-4 border-2 hover:text-brand-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-default'
						>
							<div className='flex'>
								<BsGithub /> <span className='text-base ml-2'>Git Repo</span>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className='flex flex-col  w-full'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default ProjectInfo;
