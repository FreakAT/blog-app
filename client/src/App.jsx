import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignOut from "./pages/SignOut";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Projects from "./pages/Projects";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-out" element={<SignOut />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
