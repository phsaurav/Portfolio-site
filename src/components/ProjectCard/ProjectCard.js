import React from "react";

const ProjectCard = () => {
	return (
		<div>
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
		</div>
	);
};

export default ProjectCard;