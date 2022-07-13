import * as S from './style';
import Elipse from 'assets/img/hank.png';
import { FaRegEdit as Edit } from 'react-icons/fa';
import { AiOutlinePlusCircle as Plus } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { useEffect, useState } from 'react';
import swall from 'sweetalert';
import { findAllService } from 'services/findServices';
import { profileObj } from 'types/api/Profile';
import { homedir } from 'os';

const ProfileCards = () => {
	const navigate = useNavigate();
	const [profiles, setProfiles] = useState<profileObj[]>([]);
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
			const response = await findAllService.allProfiles();
			if (response.status === 204) {
				swall({
					title: 'Info',
					text: 'Cadastre um perfil',
					icon: 'info',
					timer: 7000,
				});
			} else {
				console.log('perfis exibidos', response.data);
				setProfiles(response.data);
			}
		}
	};

	return (
		<>
			<S.ProfileCards>
				{profiles.map((profile, index) => (
					<S.ProfileCardsContent key={index}>
						<Link to={`/home/${profile.id}`}>
							<img src={profile.imageUrl} alt="" />
						</Link>
						<h3>{profile.title}</h3>
						<Edit />
					</S.ProfileCardsContent>
				))}
			</S.ProfileCards>
			<S.ProfileCardsPlus>
				<Plus />
			</S.ProfileCardsPlus>
		</>
	);
};

export default ProfileCards;
