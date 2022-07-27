import * as S from './style';
import Modal from 'react-modal';
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
import { alertaDelete, alertaSucesso } from 'utils/alertas';

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
	const [atualGenre, setAtualGenre] = useState({
		id: '',
		name: '',
	});
	const [genres, setGenres] = useState([]);
	const [listGenre, setListGenre] = useState<genreObj[]>([]);

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

	const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (event.target.name === 'genres') {
			setGame((values: gameDescObj) => ({
				...values,
				[event.target.name]: [event.target.value],
			}));
		} else {
			setGame((values: gameDescObj) => ({
				...values,
				[event.target.name]: parseInt(event.target.value),
			}));
		}
	};

	const getGameById = async () => {
		const response = await findByIdService.findGameById(`${id}`);
		setGame(response.data);
		setGenres(response.data.genres.map((genre: any) => genre.id));
	};

	const findAllGenres = async () => {
		const response = await findAllService.allGenres();

		setListGenre(response.data);
		console.log('listando generos', response.data);
	};

	console.log('Aqui', genres);

	const editGame = async () => {
		const values = {
			...game,
			genres: genres,
		};
		const response = await updateService.updateGame(`${id}`, game);
		if (response.status === 200) {
			alertaSucesso.alerta('Jogo Atualizado com sucesso!');
			closeModal();
		}
	};

	const deleteModalOpen = () => {
		alertaDelete.deleteGame().then((resp) => {
			console.log(resp);
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
							<select
								onChange={handleChangeOption}
								name="imdbScore"
								id="imdbScore"
							>
								<optgroup label="IMDB Score">
									<option>{game.imdbScore}</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</optgroup>
							</select>
							<select onChange={handleChangeOption} name="genres" id="genres">
								<optgroup label="Genero">
									<option value={atualGenre.id}>{atualGenre.name}</option>
									{listGenre.map((genre, index) => (
										<option value={genre.id} key={index}>
											{genre.name}
										</option>
									))}
								</optgroup>
							</select>
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
