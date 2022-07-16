import * as S from './style';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { profileObj } from 'types/api/Profile';
import { BiX } from 'react-icons/bi';
import { createService } from 'services/createService';
import swal from 'sweetalert';
import ButtonCriarProfile from 'components/ButtonPurple';
import interrogacao from 'assets/icons/interrogacao.svg';

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
		userId: '',
	});

	useEffect(() => {
		setFormDetails({
			id: id,
			title: title,
			btnName: btnName,
			type: type,
		});

		// chamar a api ou fazer algo
		/* type === 'editCharacter' && isOpen ? getCharacterById() : ''; */
		type === 'createProfile'
			? setPerfil({
					title: '',
					imageUrl: '',
					userId: userId,
			  })
			: console.log('nao faz nada amigao');
	}, [isOpen]);

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPerfil((values: profileObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const createProfile = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		const response = await createService.createProfile(perfil);

		if (response.status === 201) {
			exibeAlerta('Personagem criado com sucesso!', 'success', 'Sucesso!');
			onChanges(response);
			closeModal();
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

				<S.ModalPerfil>
					<S.BoxLoginForm onSubmit={createProfile}>
						<label id="thumbnail" className="thumbnail">
							<img
								src={interrogacao}
								alt="Logo que representa uma interrogação"
							/>
						</label>
						<input
							type="link"
							name="imageUrl"
							id="imageUrl"
							placeholder="Url da imagem... "
							onChange={handleChangeValues}
						/>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Nome do perfil..."
							onChange={handleChangeValues}
						/>
						<ButtonCriarProfile value="Criar" type="submit" />
					</S.BoxLoginForm>
				</S.ModalPerfil>
			</Modal>
		</div>
	);
};

export default ModalPerfil;