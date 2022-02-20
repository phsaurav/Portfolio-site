import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
	const { key, title, intro, date, user, topic, img } = blog;
	return (
		<div>
			<div className='mt-10' data-aos='fade-up'>
				<div className='max-w-4xl px-10 py-6 mx-auto bg-white shadow-lg'>
					<div className='flex items-center justify-between'>
						<span className='font-light text-gray-600'>{date}</span>

						<p className='px-2 py-1 font-semibold text-gray-100 bg-brand-3 rounded hover:bg-brand-3 text-sm'>
							{topic}
						</p>
					</div>
					<div className='my-10 text-left'>
						<Link to={`/blogs/${key}`}>
							<p className='text-3xl font-bold text-gray-700 hover:underline'>{title}</p>
							<img alt={title} src={img} className='my-5 rounded-lg w-full h-96' />
						</Link>

						<p className='mt-2 text-gray-600'>{intro}</p>
					</div>
					<div className='flex items-center justify-between mt-4'>
						<Link to={`/blogs/${key}`} className='text-blue-20 hover:underline'>
							Read more
						</Link>
						<div>
							<p className='flex items-center'>
								<div className='text-blueGray-500 text-center inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-blue-10'>
									<BiUserCircle className='text-blue-30 text-2xl' />
								</div>
								<h1 className='font-bold text-gray-700 hover:underline'>{user}</h1>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
