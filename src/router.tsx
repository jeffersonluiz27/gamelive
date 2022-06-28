import Home from 'pages/Home';
import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default Router;
