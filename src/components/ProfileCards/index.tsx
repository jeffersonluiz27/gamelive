import * as S from './style';
import Elipse from 'assets/img/hank.png';
import { FaRegEdit as Edit } from 'react-icons/fa';
import { AiOutlinePlusCircle as Plus } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { useEffect } from 'react';
import swall from 'sweetalert';

const ProfileCards = () => {
	const navigate = useNavigate();
	const jwt = localStorage.getItem('jwtLocalStorage');

	useEffect(() => {
		getAllProfiles();
	}, []);

	const getAllProfiles = async () => {
		if (!jwt) {
			swall({
				title: 'ERRO!',
				text: 'Faça o login antes de entrar na página de perfis',
				icon: 'error',
				timer: 7000,
			});
			navigate(RoutePath.LOGIN);
		} else {
			return null;
		}
	};

	return (
		<>
			<S.ProfileCards>
				<S.ProfileCardsContent>
					<Link to={RoutePath.HOME}>
						<img src={Elipse} alt="" />
					</Link>
					<h3>Hank</h3>
					<Edit />
				</S.ProfileCardsContent>
				<S.ProfileCardsContent>
					<img src={Elipse} alt="" />
					<h3>Hank</h3>
					<Edit />
				</S.ProfileCardsContent>
				<S.ProfileCardsContent>
					<img src={Elipse} alt="" />
					<h3>Hank</h3>
					<Edit />
				</S.ProfileCardsContent>
				<S.ProfileCardsContent>
					<img src={Elipse} alt="" />
					<h3>Hank</h3>
					<Edit />
				</S.ProfileCardsContent>
				<S.ProfileCardsContent>
					<img src={Elipse} alt="" />
					<h3>Hank</h3>
					<Edit />
				</S.ProfileCardsContent>
			</S.ProfileCards>
			<S.ProfileCardsPlus>
				<Plus />
			</S.ProfileCardsPlus>
		</>
	);
};

export default ProfileCards;
