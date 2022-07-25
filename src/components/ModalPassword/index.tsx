import * as S from './style';
import Modal from 'react-modal';
import ButtonResetPass from 'components/ButtonPurple';
import { BiX } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { userPassObj } from 'types/api/User';
import { findByIdService } from 'services/findServices';
import { updateService } from 'services/updateService';
import { alertaErro, alertaSucesso } from 'utils/alertas';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';

Modal.setAppElement('#root');

interface modalProps {
	isOpen: boolean; // define se o modal vai ser aberto
	closeModal: any; // recebe uma funcao para fechar o modal
	userId: string;
}

const ModalPassword = ({ isOpen, closeModal, userId }: modalProps) => {
	const navigate = useNavigate();
	const [userPass, setUserPass] = useState({
		password: '',
		confirmPassword: '',
	});

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserPass((values: userPassObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	useEffect(() => {
		getUserById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const getUserById = async () => {
		const response = await findByIdService.findUserById(userId);
		setUserPass(response.data);
	};

	const editUser = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const valores = {
			password: userPass.password,
			confirmPassword: userPass.confirmPassword,
		};
		const response = await updateService.updateUserPass(`${userId}`, valores);

		console.log(response);

		if (response.status === 200) {
			console.log('aqui');
			alertaSucesso.alerta(
				'Senha Atualizada com sucesso! Faça login novamente!'
			);
			closeModal();
			navigate(RoutePath.LOGIN);
		} else {
			alertaErro.alerta(`${response.data.message}`);
		}
	};

	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				overlayClassName="overlay-react-modal"
				className="content-react-modal"
			>
				<button
					type="button"
					className="close-modal-button"
					onClick={closeModal}
				>
					<BiX />
				</button>
				<h2 className="modal-title">{'Reset sua senha!'}</h2>
				<S.ModalPassword>
					<S.ModalPasswordForm onSubmit={editUser}>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Coloque sua nova senha..."
							onChange={handleChangeValues}
							required
						/>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Confirme sua nova senha..."
							onChange={handleChangeValues}
							required
						/>
						<ButtonResetPass value={'Salvar'} type={'submit'} />
					</S.ModalPasswordForm>
				</S.ModalPassword>
			</Modal>
		</div>
	);
};

export default ModalPassword;