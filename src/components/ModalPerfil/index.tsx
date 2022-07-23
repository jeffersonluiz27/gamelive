import * as S from './style';
import Modal from 'react-modal';
import swal from 'sweetalert';
import ButtonCriarProfile from 'components/ButtonPurple';
import ButtonDeleteProfile from 'components/ButtonRed';
import interrogacao from 'assets/icons/interrogacao.svg';
import { BiX } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { profileObj } from 'types/api/Profile';
import { createService } from 'services/createService';
import { findByIdService } from 'services/findServices';
import { updateService } from 'services/updateService';
import { deleteService } from 'services/deleteService';

Modal.setAppElement('#root');

interface modalProps {
	isOpen: boolean; // define se o modal vai ser aberto
	closeModal: any; // recebe uma funcao para fechar o modal
	onChanges: any;
	type: string; // createCharacter EditCharacter
	title: string; // title = titulo do modal
	btnName: string; // texto do botao
	id: string;
	userId: string;
}

const ModalPerfil = ({
	isOpen,
	closeModal,
	type,
	title,
	btnName,
	onChanges,
	id,
	userId,
}: modalProps) => {
	const [formDetails, setFormDetails] = useState({
		id,
		title,
		btnName,
		type,
	});

	const [perfil, setPerfil] = useState({
		title: '',
		imageUrl: '',
		userId: userId,
	});

	useEffect(() => {
		setFormDetails({
			id: id,
			title: title,
			btnName: btnName,
			type: type,
		});

		// chamar a api ou fazer algo
		type === 'editProfile' && isOpen
			? getProfileById()
			: console.log('nao faz edit amigao');

		type === 'createProfile'
			? setPerfil({
					title: '',
					imageUrl: '',
					userId: userId,
			  })
			: console.log('nao faz create amigao');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPerfil((values: profileObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const getProfileById = async () => {
		const response = await findByIdService.findProfileById(id);
		setPerfil(response.data);
	};

	const createProfile = async () => {
		const response = await createService.createProfile(perfil);

		if (response.status === 400) {
			exibeAlerta('Preencha corretamente!', 'error', 'Algo deu errado!');
		}

		if (response.status === 201) {
			exibeAlerta('Perfil criado com sucesso!', 'success', 'Sucesso!');
			onChanges(response);
			closeModal();
		}
	};

	const editProfile = async () => {
		const valores = {
			title: perfil.title,
			imageUrl: perfil.imageUrl,
			userId: perfil.userId,
		};
		const response = await updateService.updateProfile(id, valores);

		if (response.status === 200) {
			exibeAlerta('Perfil Atualizado com sucesso!', 'success', 'Sucesso!');
			onChanges(response);
			closeModal();
		}
	};

	const deleteModalOpen = () => {
		swal({
			title: 'Deseja apagar o perfil ?',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => {
			console.log(resp);
			if (resp) {
				deleteProfile();
			}
		});
	};

	const deleteProfile = async () => {
		const response = await deleteService.deleteProfile(id);
		exibeAlerta('Perfil apagado com sucesso!', 'success', 'sucesso');
		onChanges(response);
		closeModal();
	};

	const submitFunction = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		switch (type) {
			case 'createProfile':
				createProfile();
				break;
			case 'editProfile':
				editProfile();
				break;
		}
	};

	const exibeAlerta = (text: string, icon: string, title: string) => {
		swal({
			title: title,
			text: text,
			icon: icon,
			timer: 7000,
		});
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
				<h2 className="modal-title">{formDetails.title}</h2>
				<S.ModalPerfil>
					<S.BoxLoginForm onSubmit={submitFunction}>
						<label id="thumbnail" className="thumbnail">
							<img
								src={perfil.imageUrl ? perfil.imageUrl : interrogacao}
								alt="Logo que representa uma interrogação"
							/>
						</label>
						<input
							type="link"
							name="imageUrl"
							id="imageUrl"
							placeholder="Url da imagem... "
							onChange={handleChangeValues}
							defaultValue={perfil.imageUrl}
							required
						/>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Nome do perfil..."
							onChange={handleChangeValues}
							defaultValue={perfil.title}
							required
						/>
						<ButtonCriarProfile value={formDetails.btnName} type="submit" />
						{type === 'editProfile' ? (
							<div onClick={deleteModalOpen}>
								<ButtonDeleteProfile value="Deletar" type="button" />
							</div>
						) : (
							''
						)}
					</S.BoxLoginForm>
				</S.ModalPerfil>
			</Modal>
		</div>
	);
};

export default ModalPerfil;
