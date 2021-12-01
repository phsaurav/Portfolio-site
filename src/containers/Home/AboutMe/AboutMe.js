import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Typical from "react-typical";

const AboutMe = () => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div>
				<Header></Header>
				<div className='mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className=''>
							<img
								className=' object-cover object-top h-screen'
								src='https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
								alt=''
							/>
						</div>
						<div className='flex bg-white p-10 justify-center'>
							<div className='mb-auto mt-auto max-w-xl '>
								<div className=' border-b-4 border-brand-5 pb-5'>
									<h1 className='text-6xl font-semibold text-brand-4 uppercase '>PH Saurav</h1>
									<div
										className='text-2xl text-brand-5 font-semibold xl:mb-0'
										style={{ fontFamily: "'Cutive Mono', monospace" }}
									>
										<Typical
											steps={[
												"A MERN Stack Developer",
												3000,
												"An UI/UX & Graphic Designer",
												3000,
												"An Enthusiast",
												3000,
											]}
											loop={Infinity}
										/>
									</div>
								</div>
								<p className='font-light text-xl text-brand-5 mt-5'>
									I am a MERN stack developer with an extensive history of designing who loves
									developing high-quality products. I mainly focused on front-end development and have
									a working knowledge of building React websites and web applications. Also have
									experience working with technologies like ExpressJs, MongoDB and certified in UI/UX
									specialization.
								</p>
								<div className='flex justify-center'>
									<a href='https://drive.google.com/file/d/1mQLqgKwOP9l6D0IpCSniUWYWAGvlYt94/view?usp=sharing'>
										<div className='cursor-default  text-brand-3 md:px-6  py-2 mt-10 ml-28 px-6 w-60 text-center hover:bg-brand-4 hover:text-white bg-brand-white uppercase border-2 md:border-2 shadow-xl border-brand-3 mb-10 mr-28 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl '>
											Resume Download
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col  w-full'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AboutMe;
