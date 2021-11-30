import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/Home/Home";
import AllProjects from "./containers/AllProjects/AllProjects";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import AboutMe from "./containers/Home/AboutMe/AboutMe";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/allprojects' element={<AllProjects></AllProjects>}></Route>
					<Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
					<Route path='/project/:key' element={<ProjectInfo></ProjectInfo>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
