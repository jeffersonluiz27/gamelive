import Home from 'pages/Home';
import Login from 'pages/Login';
import Wellcome from 'pages/Wellcome';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Wellcome />} />
			<Route path="/login" element={<Login />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default Router;
