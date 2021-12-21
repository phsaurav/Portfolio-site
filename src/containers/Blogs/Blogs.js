import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blogs = () => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div>
				<Header></Header>
				<div>
					<div className='px-6 py-8 bg-blue-10 min-h-screen'>
						<div className='container flex justify-between mx-auto'>
							<Outlet />
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

export default Blogs;
