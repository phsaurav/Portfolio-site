import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
	return (
		<div className='bg-brand-1   w-screen  '>
			<div className=' flex mx-auto w-5/6 justify-between'>
				<div>
					<p className='text-black text-3xl md:text-2xl w-96 pt-10 font-light'>
						Diabatic Net is a network for patient with diabetes to help them in leading a healhty life
					</p>
					<HashLink
						to='home#services'
						className='bg-bluegray-900 bg-opacity-40 hover:bg-opacity-60 text-white flex items-center text-xl w-64 pl-1 rounded-full pt-2 pb-3 justify-center mt-5 '
					>
						This is a button
					</HashLink>
				</div>
				<img className='-mb-40 ' style={{ width: "800px" }} src='/assets/banner_pic.png' alt=''></img>
			</div>
		</div>
	);
};

export default Hero;
