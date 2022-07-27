import * as S from './style';
import Modal from 'react-modal';
import Select from 'react-select';
import capa from 'assets/icons/interrogacao.svg';
import ButtonUpdate from 'components/ButtonPurple';
import ButtonDelete from 'components/ButtonRed';
import { BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { findAllService, findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameDescObj } from 'types/api/Game';
import { genreObj } from 'types/api/Genres';
import { deleteService } from 'services/deleteService';
import { updateService } from 'services/updateService';
import { alertaDelete, alertaErro, alertaSucesso } from 'utils/alertas';

interface modalProps {
	isOpen: boolean; // define se o modal vai ser aberto
	closeModal: any; // recebe uma funcao para fechar o modal
	title: string; // title = titulo do modal
	id: string;
}

const ModalEditGame = ({ isOpen, closeModal, title, id }: modalProps) => {
	const [formDetails, setFormDetails] = useState({
		id,
		title,
	});

	const [game, setGame] = useState<gameDescObj>({
		title: '',
		coverImageUrl: '',
		imdbScore: 1,
		description: '',
		year: 2000,
		trailerYouTubeUrl: '',
		gameplayYouTubeUrl: '',
		genres: [],
	});
	const [genreOptions, setGenreOptions] = useState<genreObj[] | any>([]);
	const optionsImdb = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' },
	];

	const navigate = useNavigate();
	const profileId = localStorage.getItem('profileId');

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGame((values: gameDescObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChangeValuesNumber = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setGame((values: gameDescObj) => ({
			...values,
			[event.target.name]: Number(event.target.value),
		}));
	};

	const handleChangeValuesText = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setGame((values: gameDescObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChangeImdb = (event: any) => {
		setGame((values: gameDescObj) => ({
			...values,
			imdbScore: parseInt(event.value),
		}));
	};

	const handleChangeGenre = (genres: any) => {
		const genreId = genres.map((genre: any) => genre.value);
		setGame((values: gameDescObj) => ({
			...values,
			genres: genreId,
		}));
	};

	const getGameById = async () => {
		const response = await findByIdService.findGameById(`${id}`);
		setGame(response.data);
	};

	const findAllGenres = async () => {
		const response = await findAllService.allGenres();

		if (response.data) {
			const genreOptionss = response.data.map((genre: any) => {
				return {
					value: genre.id,
					label: genre.name,
				};
			});
			setGenreOptions(genreOptionss);
		}
	};

	const editGame = async () => {
		const response = await updateService.updateGame(`${id}`, game);
		if (response.status === 200) {
			alertaSucesso.alerta('Jogo Atualizado com sucesso!');
			closeModal();
		} else {
			alertaErro.alerta(`${response.data.message}`);
		}
	};

	const deleteModalOpen = () => {
		alertaDelete.deleteGame().then((resp) => {
			if (resp) {
				deleteGame();
			}
		});
	};

	const deleteGame = async () => {
		const response = await deleteService.deleteGame(`${id}`);
		console.log(response);
		alertaSucesso.alerta('Jogo apagado com sucesso!');
		closeModal();
		navigate(`/home/${profileId}`);
	};

	useEffect(() => {
		setFormDetails({
			id: id,
			title: title,
		});
		getGameById();
		findAllGenres();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				overlayClassName="overlay-react-modal"
				className="content-react-modal-del"
			>
				<button
					type="button"
					className="close-modal-button"
					onClick={closeModal}
				>
					<BiX />
				</button>
				<h2 className="modal-title">{formDetails.title}</h2>
				<S.ModalEditGame>
					<S.BoxManageGameForm>
						<S.BoxManageGameImgArea>
							<S.BoxNManageGameImg>
								<label id="thumbnail" className="thumbnail">
									<img
										src={game.coverImageUrl ? game.coverImageUrl : capa}
										alt="Logo que representa uma interrogação"
									/>
								</label>
								<input
									type="link"
									name="coverImageUrl"
									id="coverImageUrl"
									placeholder="Url Imagem da Capa..."
									onChange={handleChangeValues}
									defaultValue={game.coverImageUrl}
									required
								/>
							</S.BoxNManageGameImg>
						</S.BoxManageGameImgArea>
						<S.BoxManageGameDiv>
							<input
								type="text"
								name="title"
								id="title"
								placeholder="Nome do jogo..."
								onChange={handleChangeValues}
								defaultValue={game.title}
								required
							/>
							<input
								type="number"
								name="year"
								id="year"
								placeholder="Ano de lançamento..."
								onChange={handleChangeValuesNumber}
								defaultValue={game.year}
								required
							/>
						</S.BoxManageGameDiv>
						<S.BoxManageGameDiv>
							<Select
								name="imdbScore"
								options={optionsImdb}
								onChange={handleChangeImdb}
								className={'basic-multi-select'}
								defaultValue={[optionsImdb[0]]}
							/>
							<Select
								name="genres"
								isMulti
								options={genreOptions}
								onChange={handleChangeGenre}
								className={'selectOption basic-multi-select'}
								defaultValue={[genreOptions[0]]}
							/>
						</S.BoxManageGameDiv>
						<S.BoxManageGameDiv>
							<input
								type="link"
								name="trailerYouTubeUrl"
								id="trailerYouTubeUrl"
								placeholder="Trailer Url..."
								onChange={handleChangeValues}
								defaultValue={game.trailerYouTubeUrl}
								required
							/>
							<input
								type="link"
								name="gameplayYouTubeUrl"
								id="gameplayYouTubeUrl"
								placeholder="Gameplay Url..."
								onChange={handleChangeValues}
								defaultValue={game.gameplayYouTubeUrl}
								required
							/>
						</S.BoxManageGameDiv>
						<textarea
							name="description"
							id="description"
							placeholder="Descrição..."
							onChange={handleChangeValuesText}
							defaultValue={game.description}
						></textarea>
						<S.BoxManageGameDivButton>
							<ButtonDelete
								value="Deletar"
								type="button"
								onClick={deleteModalOpen}
							/>
							<ButtonUpdate
								value="Atualizar"
								type="button"
								onClick={editGame}
							/>
						</S.BoxManageGameDivButton>
					</S.BoxManageGameForm>
				</S.ModalEditGame>
			</Modal>
		</div>
	);
};

export default ModalEditGame;
