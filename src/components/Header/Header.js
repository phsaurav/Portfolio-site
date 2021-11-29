import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	let activeStyle = {
		color: "#000000",
		borderBottom: "2px solid black",
		fontWeight: "500",
		pointerEvents: "none",
	};
	return (
		<div className='bg-brand-1'>
			<nav className='relative z-20'>
				<div className='container mx-auto'>
					<div className='text-black'>
						<div className='flex ml-5 md:ml-0 items-center justify-between '>
							<div className='hidden md:flex items-center space-x-10  '>
								<NavLink
									to='/home'
									className='font-base text-black  pb-2 link link-underline link-underline-black'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Home
								</NavLink>
								<NavLink
									to='/explore'
									className='font-base text-black  pb-2 link link-underline link-underline-black'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									All Projects
								</NavLink>
							</div>
							<div>
								<div className='hidden md:flex justify-center items-center h-24'>
									{" "}
									<NavLink
										to='/login'
										className='cursor-default  text-brand-3 md:px-8  py-2 px-6 transition duration-300 ease-in-out hover:bg-brand-4 hover:text-white bg-brand-white uppercase border-2 md:border-2 shadow-xl border-brand-3 mb-2 mr-28'
										activeStyle={{
											backgroundColor: "#FFFFFF",
											color: "#1e1e1e",
											width: "full",
										}}
									>
										Contact
									</NavLink>
								</div>
							</div>
						</div>
						<div className='-mr-2 md:hidden flex absolute right-5 top-2'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='bg-brand-1 inline-flex items-center justify-center p-1 rounded-xl text-white transition duration-300 ease-in-out hover:text-brand-1 border-2 border-brand-1 hover:bg-white focus:outline-none '
								aria-controls='mobile-menu'
								aria-expanded='false'
							>
								<span className='sr-only'>Open main menu</span>
								{!isOpen ? (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					{(ref) => (
						<div className='md:hidden ' id='mobile-menu'>
							<div ref={ref} className=' pt-2   text-center mx-auto bg-brand-1'>
								<NavLink
									to='/home'
									className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3   text-base w-full border-b border-brand-2 py-3'
									activeStyle={{
										backgroundColor: "#FFFFFF",
										color: "#000000",
										fontWeight: "600",
										backgroundSize: "100% 0px",
									}}
								>
									Home
								</NavLink>
								<NavLink
									to='/explore'
									className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3  text-base w-full border-b border-brand-2 py-3'
									activeStyle={{
										backgroundColor: "#FFFFFF",
										color: "#000000",
										fontWeight: "600",
										backgroundSize: "100% 0px",
									}}
								>
									All Sunglasses
								</NavLink>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Header;
