import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import AllProjects from "./containers/AllProjects/AllProjects";
import AllBlog from "./containers/Blogs/AllBlog/AllBlog";
import Blog from "./containers/Blogs/Blog/Blog";
import Blogs from "./containers/Blogs/Blogs";
import AboutMe from "./containers/Home/AboutMe/AboutMe";
import Home from "./containers/Home/Home";

function App() {
    useEffect(() => {
        AOS.init({ offset: 10, delay: 500 });
    }, []);
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/home' />}></Route>
                    <Route path='/home' element={<Home></Home>}></Route>
                    {/* <Route path='/allprojects' element={<AllProjects></AllProjects>}></Route> */}
                    <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
                    <Route path='/blogs' element={<Blogs></Blogs>}>
                        <Route path='/blogs' element={<AllBlog />} />
                        <Route path=':key' element={<Blog />} />
                    </Route>
                    <Route path='/project/:id' element={<ProjectInfo></ProjectInfo>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
