import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonAtualizar from 'components/ButtonPurple';
import ButtonDeletar from 'components/ButtonRed';
import ButtonResetSenha from 'components/ButtonRed';
import { useEffect, useState } from 'react';
import { userEditObj, userObj } from 'types/api/User';
import { findAllService, findByIdService } from 'services/findServices';
import { deleteService } from 'services/deleteService';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { updateService } from 'services/updateService';
import {
	alertaDelete,
	alertaErro,
	alertaSucesso,
	alertaUpdate,
} from 'utils/alertas';
import ModalPassword from 'components/ModalPassword';

const BoxEditUser = () => {
	const navigate = useNavigate();
	const userIdStorage = localStorage.getItem('userIdStorage');
	const [users, setUsers] = useState<userObj[]>([]);
	const [refreshUsers, setRefreshUsers] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userId, setUserId] = useState({
		id: '',
	});
	const [user, setUser] = useState({
		name: '',
		email: '',
		isAdmin: true,
	});

	const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setUserId((values) => ({
			...values,
			id: event.target.value,
		}));
	};

	const handleChangeOption2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
		let isTrue = false;
		if (event.target.value === 'true') {
			isTrue = true;
		}
		setUser((values: userEditObj) => ({
			...values,
			isAdmin: isTrue,
		}));
	};

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser((values: userEditObj) => ({
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
	}, [userId, refreshUsers]);

	const admin = users.filter((e) => e.name === 'Administrador');
	console.log(admin);

	const updateUser = async () => {
		console.log(userId.id, user);
		const values = {
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		};

		if (admin[0].id !== userIdStorage) {
			if (userId.id === admin[0].id) {
				alertaUpdate.updateUser();
			} else {
				const response = await updateService.updateUserEdit(userId.id, values);
				console.log(response);

				if (response.status === 200) {
					alertaSucesso.alerta('Usuario Atualizado com sucesso!');
					updateUsers(true);
				}
			}
		} else {
			const response = await updateService.updateUserEdit(userId.id, values);
			console.log(response);

			if (response.status === 200) {
				alertaSucesso.alerta('Usuario Atualizado com sucesso!');
				updateUsers(true);
			}
		}
	};

	const deleteModalOpen = () => {
		if (admin[0].id !== userIdStorage) {
			if (userId.id === admin[0].id) {
				alertaDelete.deleteAdmin();
			} else {
				alertaDelete.deleteUser().then((resp) => {
					console.log(resp);
					if (resp) {
						deleteUser();
					}
				});
			}
		} else {
			alertaDelete.deleteUser().then((resp) => {
				console.log(resp);
				if (resp) {
					deleteUser();
				}
			});
		}
	};

	const deleteUser = async () => {
		if (admin[0].id !== userIdStorage) {
			if (userId.id !== admin[0].id) {
				const response = await deleteService.deleteUser(`${userId.id}`);
				console.log(response);
				alertaSucesso.alerta('Usuario deletado com sucesso!');
				localStorage.removeItem('jwtLocalStorage');
				localStorage.removeItem('userIdStorage');
				localStorage.removeItem('profileId');
				navigate(RoutePath.LOGIN);
			} else {
				alertaErro.alerta('Esse usuario não pode ser deletado!');
			}
		} else {
			const response = await deleteService.deleteUser(`${userId.id}`);
			console.log(response);
			alertaSucesso.alerta('Usuario deletado com sucesso!');
			localStorage.removeItem('jwtLocalStorage');
			localStorage.removeItem('userIdStorage');
			localStorage.removeItem('profileId');
			navigate(RoutePath.LOGIN);
		}
	};

	const updateUsers = (refresh: boolean) => {
		setRefreshUsers(refresh);
		setTimeout(() => {
			setRefreshUsers(false);
		}, 100);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<S.BoxEditUser>
				<S.BoxEditUserLogo>
					<S.BoxEditUserLogoImage
						src={logo}
						alt="Image do logo com um desenho de um controle de video game"
					/>
				</S.BoxEditUserLogo>
				<S.BoxEditUserForm>
					<S.BoxEditUserSearch>
						<select onChange={handleChangeOption} name="name" id="nameSelect">
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
					<S.BoxEditUserSearch>
						<select onChange={handleChangeOption2} name="isAdmin" id="isAdmin">
							<optgroup label="Tipo">
								<option value="false">User</option>
								<option value="true">Admin</option>
							</optgroup>
						</select>
					</S.BoxEditUserSearch>
					<ButtonResetSenha
						value="Resetar Senha"
						type="button"
						id="resetSenha"
						onClick={openModal}
					/>
					<div id="buttons">
						<ButtonDeletar
							value="Deletar"
							type="button"
							onClick={deleteModalOpen}
						/>
						<ButtonAtualizar
							value="Atualizar"
							type="button"
							onClick={updateUser}
						/>
					</div>
				</S.BoxEditUserForm>
			</S.BoxEditUser>
			<ModalPassword
				isOpen={isModalOpen}
				closeModal={closeModal}
				userId={userId.id}
			/>
		</>
	);
};;

export default BoxEditUser;
