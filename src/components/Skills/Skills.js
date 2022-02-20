import React from "react";

const Skills = ({ label, svg, faClass }) => {
	return (
		<div
			data-aos='fade-up'
			data-aos-duration='1500'
			className='col-3 col-sm-2 hover:text-brand-4 mx-8 my-5 inline h-24 w-24 transform text-sm text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1'
		>
			{svg ? (
				<svg
					aria-hidden='true'
					focusable='false'
					data-icon={label}
					role='i'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 384 512'
				>
					<path fill='currentcolor' d={svg} />
				</svg>
			) : (
				<i className={`${faClass} fa-5x mx-auto my-auto `}></i>
			)}
			<h6 className='mt-2'>{label}</h6>
		</div>
	);
};

export default Skills;
