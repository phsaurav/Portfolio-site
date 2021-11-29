import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
