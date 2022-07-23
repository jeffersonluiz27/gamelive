import * as S from './style';
import swall from 'sweetalert';
import ModalPerfil from 'components/ModalPerfil';
import { FaRegEdit as Edit } from 'react-icons/fa';
import { AiOutlinePlusCircle as Plus } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { useEffect, useState } from 'react';
import { findAllService } from 'services/findServices';
import { profileObj } from 'types/api/Profile';

const ProfileCards = () => {
	const navigate = useNavigate();
	const jwt = localStorage.getItem('jwtLocalStorage');
	const LocalUseId = localStorage.getItem('userIdStorage');
	const [profiles, setProfiles] = useState<profileObj[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [type, setType] = useState<string>('');
	const [btnName, setBtnName] = useState<string>('');
	const [profileId, setProfileId] = useState<string>('');
	const [titlePerfil, setTitlePerfil] = useState<string>('');
	const [refreshProfiles, setRefreshProfiles] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	function closeModal() {
		setIsModalOpen(false);
	}

	const onEdit = () => {
		updateProfiles(true);
	};

	function createProfile() {
		setType('createProfile');
		setProfileId('');
		setTitlePerfil('Criar Perfil');
		setBtnName('Criar');
		openModal();
	}

	function editProfile(id: string): any {
		setType('editProfile');
		setProfileId(`${id}`);
		setTitlePerfil('Atualizar Perfil');
		setBtnName('Atualizar');
		openModal();
	}

	useEffect(() => {
		getAllProfiles();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshProfiles]);

	const updateProfiles = (refreshProf: boolean) => {
		setRefreshProfiles(refreshProf);
		setTimeout(() => {
			setRefreshProfiles(false);
		}, 100);
	};

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

	let resulta = profiles.filter((e) => e.userId === LocalUseId);
	let limitProfile = '';

	if (profiles.length >= 5) {
		limitProfile = 'disabled';
	}

	return (
		<>
			<S.ProfileCards>
				{resulta.map((profile, index) => (
					<S.ProfileCardsContent key={index}>
						<Link to={`/home/${profile.id}`}>
							<img src={profile.imageUrl} alt="" />
						</Link>
						<h3>{profile.title}</h3>
						<Edit onClick={() => editProfile(`${profile.id}`)} />
					</S.ProfileCardsContent>
				))}
			</S.ProfileCards>
			<S.ProfileCardsPlus>
				<Plus onClick={createProfile} className={limitProfile} />
			</S.ProfileCardsPlus>
			<ModalPerfil
				isOpen={isModalOpen}
				closeModal={closeModal}
				type={`${type}`}
				title={titlePerfil}
				onChanges={onEdit}
				btnName={btnName}
				id={profileId}
				userId={`${LocalUseId}`}
			/>
		</>
	);
};

export default ProfileCards;
