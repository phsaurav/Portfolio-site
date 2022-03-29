import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("phsaurav", "template_3tn6n5v", form.current, "rHPn86XqXxoASG1sA").then(
			(result) => {
				toast.success("Message Sent!", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				e.target.reset();
			},
			(error) => {
				toast.error("Error: " + error.text, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		);
	};

	return (
		<div>
			<div
				data-aos='zoom-in-up'
				id='contact'
				className='items-top container relative mx-auto mt-20 flex justify-center bg-white pb-20 text-left dark:bg-gray-900 sm:items-center sm:pt-0 '
			>
				<div className='max-w-screen mx-auto sm:px-6 lg:px-8 '>
					<div className='mt-4 overflow-hidden'>
						<div className='grid w-full grid-cols-1 md:grid-cols-2'>
							<div className='mr-2 bg-gray-100 p-6 dark:bg-gray-800'>
								<h1 className='text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl'>
									Get in touch
								</h1>
								<p className='text-normal mt-2 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-2xl'>
									Fill in the form to start a conversation
								</p>

								<div className='mt-8 flex items-center text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='h-8 w-8 text-gray-500'
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
									<div className='text-md ml-4 w-60 font-semibold tracking-wide'>
										Basundhora-47 West Hazipara, Sunamganj
									</div>
								</div>

								<div className='mt-4 flex items-center text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='h-8 w-8 text-gray-500'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
									<div className='text-md ml-4 w-40 font-semibold tracking-wide'>01740562330</div>
								</div>

								<div className='mt-2 flex items-center text-gray-600 dark:text-gray-400'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										viewBox='0 0 24 24'
										className='h-8 w-8 text-gray-500'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<div className='text-md ml-4 w-40 font-semibold tracking-wide'>
										phsaurav29@gmail.com
									</div>
								</div>
							</div>

							<form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center p-6'>
								<div className='flex flex-col'>
									<label htmlFor='name' className='hidden'>
										Full Name
									</label>
									<input
										type='text'
										name='user_name'
										id='name'
										placeholder='Full Name'
										className='w-100 mt-2 border border-gray-400  bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800'
										required
									/>
								</div>

								<div className='mt-2 flex flex-col'>
									<label htmlFor='email' className='hidden'>
										Email
									</label>
									<input
										type='email'
										name='user_email'
										id='email'
										placeholder='Email'
										className='w-100 mt-2 border border-gray-400  bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800'
										required
									/>
								</div>

								<div className='mt-2 flex flex-col'>
									<label htmlFor='tel' className='hidden'>
										Message
									</label>
									<textarea
										name='message'
										id='tel'
										placeholder='Message'
										className='w-100 mt-2 border border-gray-400  bg-white py-3 px-3 font-semibold text-gray-800 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800'
										required
									></textarea>
								</div>
								<button
									type='submit'
									value='Send'
									className='bg-brand-4 hover:bg-blue-dark hover:text-brand-4 hover:border-brand-2 mt-3 rounded-sm border-2 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-white md:w-32'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				className='fixed top-0'
			/>
		</div>
	);
};

export default Contact;
