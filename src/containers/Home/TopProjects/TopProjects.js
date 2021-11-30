import React from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

const TopProjects = () => {
	return (
		<div>
			<h1 className='mt-10 mb-2 text-3xl font-light text-brand-3 uppercase'>Some of my latest work</h1>
			<div className='flex justify-center'>
				<div className=' bg-brand-3 h-px w-20 mb-10'></div>
			</div>
			<div className='flex justify-center items-center container mx-auto gap-20 lg:gap-20 flex-wrap'>
				<ProjectCard></ProjectCard>
				<a href='https://specssphere.netlify.app/'>
					<div className='container mx-auto overflow-hidden shadow-lg my-2 bg-white w-96 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-xl'>
						<div
							className='relative z-10'
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))" }}
						>
							<div className='absolute inset-0 bg-black bg-opacity-20 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
							<img
								className='w-full hover:object-fill'
								src='https://i.ibb.co/fGdBnVt/specsphere-1080.png'
								alt=''
							/>
						</div>
						<div className='pt-3 pb-8 text-gray-600 text-center'>
							<p className='text-3xl font-base'>SpecsSphere </p>
							<p className='text-sm font-light'>Luxury sunglasses providing website</p>
						</div>
					</div>
				</a>
				<a href='https://sylhetiguide.netlify.app'>
					<div className='container mx-auto overflow-hidden shadow-lg my-2 bg-white w-96 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-xl'>
						<div
							className='relative z-10'
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))" }}
						>
							<img className='w-full' src='https://i.ibb.co/mv7PT72/sylhetiguide-1080.png' alt='' />
							<div className='absolute inset-0 bg-black bg-opacity-20 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
						</div>
						<div className='pt-3 pb-8 text-gray-600 text-center'>
							<p className='text-3xl font-base'>Sylheti Guide </p>
							<p className='text-sm font-light'>An easy Sylheti tour guide booking site</p>
						</div>
					</div>
				</a>
				<a href='https://diabeticnet.netlify.app/'>
					<div className='container mx-auto overflow-hidden shadow-lg my-2 bg-white w-96 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-xl'>
						<div
							className='relative z-10'
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw))" }}
						>
							<img className='w-full' src='https://i.ibb.co/LhBxS6Q/diabeticnet-1080.png' alt='' />
							<div className='absolute inset-0 bg-black bg-opacity-20 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
						</div>
						<div className='pt-3 pb-8 text-gray-600 text-center'>
							<p className='text-3xl font-base'>DiabeticNet</p>
							<p className='text-sm font-light'>
								A network and specialize services for diabetic patients
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default TopProjects;
