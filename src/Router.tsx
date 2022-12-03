// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import SingleJob from "./pages/dynamic/single_job/SingleJob";
import Home from "./pages/home/Home";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/job/:id" element={<SingleJob />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
