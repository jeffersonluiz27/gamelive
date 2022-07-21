import * as S from './style';
import logo from 'assets/img/logo.png';
import swal from 'sweetalert';
import ButtonAtualizar from 'components/ButtonPurple';
import ButtonDeletar from 'components/ButtonRed';
import ButtonResetSenha from 'components/ButtonRed';
import { useEffect, useState } from 'react';
import { userObj } from 'types/api/User';
import { findAllService, findByIdService } from 'services/findServices';
import { deleteService } from 'services/deleteService';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';

const BoxEditUser = () => {
	const navigate = useNavigate();
	const userIdStorage = localStorage.getItem('userIdStorage');
	const [users, setUsers] = useState<userObj[]>([]);
	const [userId, setUserId] = useState({
		id: '',
	});
	const [user, setUser] = useState({
		name: '',
		cpf: '',
		email: '',
		password: '',
		confirmPassword: '',
		isAdmin: true,
	});

	const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setUserId((values) => ({
			...values,
			id: event.target.value,
		}));
	};

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser((values: userObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const getAllUser = async () => {
		const response = await findAllService.allUsers();
		setUsers(response.data);
		console.log('Listando Usuarios', response.data);
	};

	const getUserById = async () => {
		const response = await findByIdService.findUserById(userId.id);
		console.log(response.data);
		setUser(response.data);
	};

	useEffect(() => {
		getAllUser();
		getUserById();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId]);

	const deleteModalOpen = () => {
		if (userId.id !== userIdStorage) {
			swal({
				title: 'Ops! Você não pode apagar outros Usuarios !',
				icon: 'error',
				buttons: ['Cancelar', 'OK'],
			});
		} else {
			swal({
				title: 'Deseja apagar o Usuario ? Você perderá todos os seus dados!',
				icon: 'error',
				buttons: ['Não', 'Sim'],
			}).then((resp) => {
				console.log(resp);
				if (resp) {
					deleteUser();
				}
			});
		}
	};

	const deleteUser = async () => {
		const response = await deleteService.deleteUser(`${userId.id}`);
		console.log(response);
		exibeAlerta('Usuario apagado com sucesso!', 'success', 'sucesso');
		localStorage.setItem('jwtLocalStorage', '');
		navigate(RoutePath.LOGIN);
	};;

	const exibeAlerta = (text: string, icon: string, title: string) => {
		swal({
			title: title,
			text: text,
			icon: icon,
			timer: 7000,
		});
	};

	return (
		<S.BoxEditUser>
			<S.BoxEditUserLogo>
				<S.BoxEditUserLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxEditUserLogo>
			<S.BoxEditUserForm>
				<S.BoxEditUserSearch>
					<select onChange={handleChangeOption} name="name" id="name">
						<optgroup label="Usuarios">
							<option>Escolha</option>
							{users.map((user, index) => (
								<option value={user.id} key={index}>
									{user.name}
								</option>
							))}
						</optgroup>
					</select>
				</S.BoxEditUserSearch>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Nome..."
					onChange={handleChangeValues}
					defaultValue={user.name}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email..."
					onChange={handleChangeValues}
					defaultValue={user.email}
				/>
				<ButtonResetSenha value="Resetar Senha" type="button" id="resetSenha" />
				<div id="buttons">
					<ButtonDeletar
						value="Deletar"
						type="button"
						onClick={deleteModalOpen}
					/>
					<ButtonAtualizar value="Atualizar" type="button" />
				</div>
			</S.BoxEditUserForm>
		</S.BoxEditUser>
	);
};

export default BoxEditUser;
