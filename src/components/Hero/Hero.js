import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const Hero = () => {
	return (
		<div>
			<div className='ml-10'>
				<div className=' flex flex-col flex-warp md:flex-row w-full justify-between'>
					<div className='text-left flex flex-col items-center'>
						<div className=''>
							<p className='text-5xl md:text-6xl xl:text-7xl font-light text-brand-5 mt-10 -mb-3'>
								Hello
							</p>
							<div className='mb-10'>
								<span className='text-5xl md:text-6xl xl:text-7xl font-light text-brand-5'>
									I'm
								</span>
								<span className='text-5xl md:text-6xl xl:text-7xl font-semibold text-brand-4'>
									{" "}
									PH Saurav
								</span>
								<div
									className='lg:text-3xl text-lg text-brand-5 font-semibold -mb-5 xl:mb-0'
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
									<a href='https://drive.google.com/file/d/1dsGAvCMeKat47qhv6_SyU5QukYws4ogj/view?usp=sharing'>
										<div className='cursor-default  text-brand-3 py-2  md:py-3 md:px-6 md:w-60 w-52 text-center hover:bg-brand-4 hover:text-white bg-brand-white uppercase border-2 md:border-2 shadow-xl border-brand-3 lg:mb-10 mr-28 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl'>
											Resume Download
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className=' md:w-1/2'>
						<Link to='/aboutme'>
							<img
								className='xl:-mb-40 lg:-mb-36 -mb-20 mt-16 -ml-5 lg:mt-0 lg:ml-0 w-full pt-5 transition duration-500 ease-in-out transform hover:-translate-y-6'
								src='/assets/banner_pic.png'
								alt=''
							></img>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
