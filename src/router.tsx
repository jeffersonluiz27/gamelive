import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import NewGame from 'pages/NewGame';
import Singup from 'pages/Singup';
import Wellcome from 'pages/Wellcome';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'types/routes';

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.WELLCOME} element={<Wellcome />} />
			<Route path={RoutePath.LOGIN} element={<Login />} />
			<Route path={RoutePath.HOME} element={<Homepage />} />
			<Route path={RoutePath.NEWGAME} element={<NewGame />} />
			<Route path={RoutePath.USEREDIT} element={''} />
			<Route path={RoutePath.SINGUP} element={<Singup />} />
		</Routes>
	);
};

export default Router;
