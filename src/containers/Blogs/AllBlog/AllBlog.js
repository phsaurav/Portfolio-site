import React from "react";
import useBlogs from "../../../hooks/useBlogs";
import Card from "../Card/Card";

const AllBlog = () => {
	const [blogs] = useBlogs();
	return (
		<div className='w-full'>
			<div className='flex max-w-4xl mx-auto'>
				<h1 className='text-xl font-bold text-gray-700 md:text-3xl'>Posts</h1>
			</div>
			{blogs.map((blog) => (
				<Card key={blog.key} blog={blog} />
			))}
		</div>
	);
};

export default AllBlog;
