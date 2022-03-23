import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/Home/Home";
import AllProjects from "./containers/AllProjects/AllProjects";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import AboutMe from "./containers/Home/AboutMe/AboutMe";
import Blogs from "./containers/Blogs/Blogs";
import Blog from "./containers/Blogs/Blog/Blog";
import AllBlog from "./containers/Blogs/AllBlog/AllBlog";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/allprojects' element={<AllProjects></AllProjects>}></Route>
					<Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
					<Route path='/blogs' element={<Blogs></Blogs>}>
						<Route path='/blogs' element={<AllBlog />} />
						<Route path=':id' element={<Blog />} />
					</Route>
					<Route path='/project/:id' element={<ProjectInfo></ProjectInfo>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
