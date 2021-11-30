import React from "react";
import { useParams } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useProjects from "../../hooks/useProjects";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
				<h1 className='mt-10 text-3xl font-light text-brand-3 uppercase'>{selectedProject[0]?.title}</h1>
				<p className='text-lg font-light text-brand-5'>{selectedProject[0]?.subtitle}</p>
				<div className='flex justify-center '>
					<div className=' bg-brand-5 h-px w-20 mb-10 mt-3 '></div>
				</div>
				<div className='cursor-default '>
					<div className='h-full w-full mx-auto bg-brand-3 py-10'>
						<Carousel
							swipeable={true}
							draggable={true}
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							autoPlaySpeed={3000}
							transitionDuration={500}
							dotListClass='custom-dot-list-style'
							removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
						>
							{images.map((image) => (
								<div className=' flex justify-center mx-auto' style={{ height: "600px" }}>
									<img className='object-contain' src={image} alt='' />
								</div>
							))}
						</Carousel>
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
