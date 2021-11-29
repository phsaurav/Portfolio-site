import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Contact from "./Contact/Contact";

const Home = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<div className=''>
				<Header></Header>
				<div>
					<div className='bg-brand-1 w-screen'>
						<div className='container mx-auto '>
							<Hero></Hero>
						</div>
					</div>
					<div className='mt-40'>
						<h1>This is Home</h1>
					</div>
					<div>
						<Contact></Contact>
					</div>
				</div>
			</div>
			<div className='flex flex-col  w-full'>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
