import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const Hero = () => {
	return (
		<div>
			<div className='ml-10'>
				<div className=' flex-warp flex w-full flex-col justify-between md:flex-row'>
					<div className='flex flex-col items-center text-left'>
						<div className=''>
							<p className='text-brand-5 mt-10 -mb-3 text-5xl font-light md:text-6xl xl:text-7xl'>
								Hello
							</p>
							<div className='mb-10'>
								<span className='text-brand-5 text-5xl font-light md:text-6xl xl:text-7xl'>
									I'm
								</span>
								<span className='text-brand-4 text-5xl font-semibold md:text-6xl xl:text-7xl'>
									{" "}
									PH Saurav
								</span>
								<div
									className='text-brand-5 -mb-5 text-lg font-semibold lg:text-3xl xl:mb-0'
									style={{ fontFamily: "'Cutive Mono', monospace" }}
								>
									<Typical
										steps={[
											"A MERN Stack Developer",
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
							<div>
								<div>
									<a href='https://drive.google.com/file/d/12rjVPlolM8osYfwaFHBLCfc9PJH11X9y/view?usp=sharing'>
										<div className='text-brand-3  hover:bg-brand-4 bg-brand-white  border-brand-3 mr-28 w-52 transform cursor-default border-2 py-2 text-center uppercase shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:text-white hover:shadow-xl md:w-60 md:border-2 md:py-3 md:px-6 lg:mb-10'>
											Resume Download
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className=' md:w-1/2'>
						<Link to='/aboutme'>
							<div className='transform pt-5 transition duration-500 ease-in-out hover:-translate-y-6'>
								<img
									data-aos='zoom-in-down'
									className='-mb-20 mt-16 -ml-5 w-full transform pt-5 transition duration-500 ease-in-out hover:-translate-y-6 lg:-mb-36 lg:mt-0 lg:ml-0 xl:-mb-40'
									src='/assets/banner_pic.png'
									alt=''
								></img>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
