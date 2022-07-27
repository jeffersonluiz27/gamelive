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
	const [genreOptions, setGenreOptions] = useState<any>([]);
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

	const handleChangeOption2 = (genres: any) => {
		console.log(genres);
		const genreId = genres.map((genre: any) => genre.values);
		console.log(genreId);
		setGame((values: gameDescObj) => ({
			...values,
			genres: genreId,
		}));
	};

	const createGame = async (event: React.SyntheticEvent) => {
		console.log(game);
		event.preventDefault();
		const response = await createService.createGame(game);

		console.log('Game criado', response);

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
						values: genre.id,
						label: genre.name,
					};
				});
				setGenreOptions(genreOptionss);
			}
			setListGenre(response.data);
			console.log('Aqui', genreOptions);
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
							<select
								onChange={handleChangeOption}
								name="imdbScore"
								id="imdbScore"
							>
								<optgroup label="IMDB Score">
									<option>Escolha</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</optgroup>
							</select>
							<Select
								name="genres"
								isMulti
								options={genreOptions}
								onChange={handleChangeOption2}
							/>
							{/* <select onChange={handleChangeOption} name="genres" id="genres">
								<optgroup label="Genero">
									<option>Escolha</option>
									{listGenre.map((genre, index) => (
										<option value={genre.id} key={index}>
											{genre.name}
										</option>
									))}
								</optgroup>
							</select> */}
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
