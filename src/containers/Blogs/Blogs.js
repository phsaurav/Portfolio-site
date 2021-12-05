import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blogs = () => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div>
				<Header></Header>
				<div>
					<h1 className='mt-10 mb-2 md:text-5xl text-2xl font-light text-brand-3 uppercase'>
						Blogs Coming Soon
					</h1>
					<div className='flex justify-center'>
						<div className='border-brand-3 h-px w-20 mb-10 border-b'></div>
					</div>
				</div>
			</div>
			<div className='flex flex-col  w-full'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Blogs;
