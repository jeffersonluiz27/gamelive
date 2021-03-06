import * as S from './style';
import swal from 'sweetalert';
import capa from 'assets/icons/interrogacao.svg';
import ButtonCriar from 'components/ButtonPurple';
import ManageGenre from 'components/ManageGenre';
import { useEffect, useState } from 'react';
import { genreObj } from 'types/api/Genres';
import { findAllService } from 'services/findServices';
import { gameDescObj } from 'types/api/Game';
import { createService } from 'services/createService';
import { useNavigate } from 'react-router-dom';

const BoxNewGame = () => {
	const navigate = useNavigate();
	const [listGenre, setListGenre] = useState<genreObj[]>([]);
	const [game, setGame] = useState({
		title: '',
		coverImageUrl: '',
		imdbScore: 1,
		description: '',
		year: 2000,
		trailerYouTubeUrl: '',
		gameplayYouTubeUrl: '',
		genres: '',
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
		setGame((values: gameDescObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChangeOption2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setGame((values: gameDescObj) => ({
			...values,
			[event.target.name]: parseInt(event.target.value),
		}));
	};

	const createGame = async (event: React.SyntheticEvent) => {
		console.log(game);
		event.preventDefault();
		const response = await createService.createGame(game);

		console.log('Game criado', response);

		if (response.status === 201) {
			exibeAlerta('Game criado com sucesso!', 'success', 'Sucesso!');
			navigate(-1);
		}
		if (response.status === 422) {
			exibeAlerta(
				'N??o ?? possivel criar Game. Game j?? existe!',
				'error',
				'J?? existe!'
			);
		}
		if (response.status === 400) {
			exibeAlerta('Algo deu errado!', 'error', 'Ishi!');
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

	useEffect(() => {
		const findAllGenres = async () => {
			const response = await findAllService.allGenres();
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
										alt="Logo que representa uma interroga????o"
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
								placeholder="Ano de lan??amento..."
								onChange={handleChangeValuesNumber}
								required
							/>
						</S.BoxNewGameDiv>
						<S.BoxNewGameDiv>
							<select
								onChange={handleChangeOption2}
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
							<select onChange={handleChangeOption} name="genres" id="genres">
								<optgroup label="Genero">
									<option>Escolha</option>
									{listGenre.map((genre, index) => (
										<option value={genre.id} key={index}>
											{genre.name}
										</option>
									))}
								</optgroup>
							</select>
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
							placeholder="Descri????o..."
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
