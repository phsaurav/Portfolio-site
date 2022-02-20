import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<div
				data-aos='zoom-in-up'
				id='contact'
				className='relative mx-auto mt-20 text-left container flex items-top justify-center pb-20 bg-white dark:bg-gray-900 sm:items-center sm:pt-0 '
			>
				<div className='max-w-screen mx-auto sm:px-6 lg:px-8 '>
					<div className='mt-4 overflow-hidden'>
						<div className='grid grid-cols-1 md:grid-cols-2 w-full'>
							<div className='p-6 mr-2 bg-gray-100 dark:bg-gray-800'>
								<h1 className='text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight'>
									Get in touch
								</h1>
								<p className='text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2'>
									Fill in the form to start a conversation
								</p>

								<div className='flex items-center mt-8 text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='w-8 h-8 text-gray-500'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<div className='ml-4 text-md tracking-wide font-semibold w-60'>
										Basundhora-47 West Hazipara, Sunamganj
									</div>
								</div>

								<div className='flex items-center mt-4 text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='w-8 h-8 text-gray-500'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
									<div className='ml-4 text-md tracking-wide font-semibold w-40'>01740562330</div>
								</div>

								<div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='w-8 h-8 text-gray-500'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<div className='ml-4 text-md tracking-wide font-semibold w-40'>
										phsaurav29@gmail.com
									</div>
								</div>
							</div>

							<form className='p-6 flex flex-col justify-center'>
								<div className='flex flex-col'>
									<label htmlFor='name' className='hidden'>
										Full Name
									</label>
									<input
										type='name'
										name='name'
										id='name'
										placeholder='Full Name'
										className='w-100 mt-2 py-3 px-3  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
									/>
								</div>

								<div className='flex flex-col mt-2'>
									<label htmlFor='email' className='hidden'>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='Email'
										className='w-100 mt-2 py-3 px-3  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
									/>
								</div>

								<div className='flex flex-col mt-2'>
									<label htmlFor='tel' className='hidden'>
										Message
									</label>
									<textarea
										name='tel'
										id='tel'
										placeholder='Message'
										className='w-100 mt-2 py-3 px-3  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
									></textarea>
								</div>

								<Link to='/home'>
									<button
										type='submit'
										className='md:w-32 bg-brand-4 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-brand-3 transition ease-in-out duration-300'
									>
										Submit
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
