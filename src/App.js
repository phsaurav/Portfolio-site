import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
