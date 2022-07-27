import * as S from './style';
import logo from 'assets/img/logo.png';
import Select from 'react-select';
import ButtonAtualizar from 'components/ButtonPurple';
import ButtonDeletar from 'components/ButtonRed';
import ButtonResetSenha from 'components/ButtonRed';
import React, { useEffect, useState } from 'react';
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
	const [users, setUsers] = useState([{ value: '', label: '' }]);
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
	const isAdmin = [
		{ value: false, label: 'User' },
		{ value: true, label: 'Admin' },
	];

	const handleChangeOption = (event: userEditObj | any) => {
		setUserId({
			id: event.value,
		});
	};

	const handleChangeAdmin = (newValue: userEditObj | any) => {
		let isTrue = false;
		if (newValue.value === true) {
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

	const getAllUser = async () => {
		const response = await findAllService.allUsers();
		if (response.data) {
			const allUsers = response.data.map((user: any) => {
				return {
					value: user.id,
					label: user.name,
				};
			});
			setUsers(allUsers);
		}
	};

	useEffect(() => {
		getAllUser();

		const getUserById = async () => {
			const response = await findByIdService.findUserById(userId.id);
			setUser(response.data);
		};
		getUserById();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId, refreshUsers]);

	const admin = users.filter((e: any) => e.label === 'Administrador');

	const updateUser = async () => {
		const values = {
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		};

		if (admin[0].value !== userIdStorage) {
			if (userId.id === admin[0].value) {
				alertaUpdate.updateUser();
			} else {
				const response = await updateService.updateUserEdit(userId.id, values);

				if (response.status === 200) {
					alertaSucesso.alerta('Usuario Atualizado com sucesso!');
					updateUsers(true);
				} else {
					alertaErro.alerta(`${response.data.message}`);
				}
			}
		} else {
			const response = await updateService.updateUserEdit(userId.id, values);

			if (response.status === 200) {
				alertaSucesso.alerta('Usuario Atualizado com sucesso!');
				updateUsers(true);
			} else {
				alertaErro.alerta(`${response.data.message}`);
			}
		}
	};

	const deleteModalOpen = () => {
		if (admin[0].value !== userIdStorage) {
			if (userId.id === admin[0].value) {
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
		if (admin[0].value !== userIdStorage) {
			if (userId.id !== admin[0].value) {
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
						<Select
							name="names"
							options={users}
							onChange={handleChangeOption}
							className={'basic-multi-select'}
						/>
					</S.BoxEditUserSearch>
					<input
						type="text"
						name="name"
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
						<Select
							name="isAdmin"
							options={isAdmin}
							onChange={handleChangeAdmin}
							className={'basic-multi-select'}
							defaultValue={[isAdmin[1]]}
						/>
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
