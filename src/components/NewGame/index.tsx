import * as S from './style';
import capa from 'assets/icons/interrogacao.svg';
import ButtonCriar from 'components/ButtonPurple';
import ManageGenre from 'components/ManageGenre';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { genreObj } from 'types/api/Genres';
import { findAllService } from 'services/findServices';
import { gameDescObj } from 'types/api/Game';
import { createService } from 'services/createService';
import { useNavigate } from 'react-router-dom';
import { alertaErro, alertaSucesso } from 'utils/alertas';

const BoxNewGame = () => {
	const navigate = useNavigate();
	const [listGenre, setListGenre] = useState<genreObj[]>([]);
	const [genreOptions, setGenreOptions] = useState<genreObj[] | any>([]);
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

	const optionsImdb = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' },
	];

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

	const createGame = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		const response = await createService.createGame(game);

		if (response.status === 201) {
			alertaSucesso.alerta('Game criado com sucesso!');
			navigate(-1);
		}
		if (response.status === 422) {
			alertaErro.alerta('Não é possivel criar Game. Game já existe!');
		}
		if (response.status === 400) {
			alertaErro.alerta(`${response.data.message}`);
		}
	};

	useEffect(() => {
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
			setListGenre(response.data);
		};
		findAllGenres();
	}, []);

	return (
		<S.NewGame>
			<S.NewGameLeft>
				<h2>Cadastrar Jogo</h2>
				<S.BoxNewGame>
					<S.BoxNewGameForm onSubmit={createGame}>
						<S.BoxNewGameImgArea>
							<S.BoxNewGameImg>
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
									required
								/>
							</S.BoxNewGameImg>
						</S.BoxNewGameImgArea>
						<S.BoxNewGameDiv>
							<input
								type="text"
								name="title"
								id="title"
								placeholder="Nome do jogo..."
								onChange={handleChangeValues}
								required
							/>
							<input
								type="number"
								name="year"
								id="year"
								placeholder="Ano de lançamento..."
								onChange={handleChangeValuesNumber}
								required
							/>
						</S.BoxNewGameDiv>
						<S.BoxNewGameDiv>
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
						</S.BoxNewGameDiv>
						<S.BoxNewGameDiv>
							<input
								type="link"
								name="trailerYouTubeUrl"
								id="trailerYouTubeUrl"
								placeholder="Trailer Url..."
								onChange={handleChangeValues}
								required
							/>
							<input
								type="link"
								name="gameplayYouTubeUrl"
								id="gameplayYouTubeUrl"
								placeholder="Gameplay Url..."
								onChange={handleChangeValues}
								required
							/>
						</S.BoxNewGameDiv>
						<textarea
							name="description"
							id="description"
							placeholder="Descrição..."
							onChange={handleChangeValuesText}
						></textarea>
						<ButtonCriar value="Criar" type="submit" />
					</S.BoxNewGameForm>
				</S.BoxNewGame>
			</S.NewGameLeft>
			<S.NewGameRigth>
				<ManageGenre />
			</S.NewGameRigth>
		</S.NewGame>
	);
};

export default BoxNewGame;
