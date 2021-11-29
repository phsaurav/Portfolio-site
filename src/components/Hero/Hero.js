import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
	return (
		<div>
			<div className=''>
				<div className=' flex flex-col flex-warp md:flex-row w-full justify-between'>
					<div className='text-left flex flex-col items-center'>
						<div className=''>
							<p className='text-5xl md:text-6xl xl:text-7xl font-light text-brand-5 mt-10'>Hello</p>
							<div className='mb-10'>
								<span className='text-5xl md:text-6xl xl:text-7xl font-light text-brand-5'>I'm</span>
								<span className='text-5xl md:text-6xl xl:text-7xl font-semibold text-brand-4'>
									{" "}
									PH Saurav
								</span>
							</div>
							<div>
								<div>
									<HashLink
										to='home#services'
										className='cursor-default  text-brand-3 md:px-8 md:py-3 py-2 px-6 transition duration-300 ease-in-out hover:bg-brand-4 hover:text-white bg-brand-white uppercase border-2 md:border-2 shadow-xl border-brand-3 mb-2 mt-10'
									>
										Resume Download
									</HashLink>
								</div>
							</div>
						</div>
					</div>
					<div className=' md:w-1/2'>
						<img
							className='xl:-mb-40 lg:-mb-32 -mb-20 mt-24 -ml-1 lg:mt-0 lg:ml-0 w-full'
							src='/assets/banner_pic.png'
							alt=''
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
