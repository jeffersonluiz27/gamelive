import * as S from './style';
import Card from 'components/Card';
import swall from 'sweetalert';
import { findAllService, findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameObj } from 'types/api/Game';
import { genreObj } from 'types/api/Genres';

const GameList = () => {
	const [games, setGames] = useState<gameObj[]>([]);
	const [favoritos, setFavoritos] = useState<gameObj[]>([]);
	const [generos, setGeneros] = useState<genreObj[]>([]);
	const profileId = localStorage.getItem('profileId');

	useEffect(() => {
		getAllGamesFavoritos();
		getAllGames();
		getAllGenres();
	}, []);

	const getAllGenres = async () => {
		const response = await findAllService.allGender();

		console.log('generos exibidos', response.data);
		setGeneros(response.data);
	};

	const getAllGamesFavoritos = async () => {
		const response = await findByIdService.findHomeProfile(`${profileId}`);

		console.log('favoritos exibidos', response.data.favorites.games);
		setFavoritos(response.data.favorites.games);
	};

	const getAllGames = async () => {
		const response = await findAllService.allGames();

		if (response.status === 204) {
			swall({
				title: 'Info',
				text: 'Não existe game cadastrado!',
				icon: 'info',
				timer: 7000,
			});
		} else {
			console.log('games exibidos', response.data[0].genres[0].name);
			setGames(response.data);
		}
	};

	return (
		<>
			<S.GameList>
				<h2>Favoritos</h2>
				<S.GameListFavoritos>
					{favoritos.map((favorito, index) => (
						<Card game={favorito} key={index} />
					))}
				</S.GameListFavoritos>
				<h2>Generos</h2>
				{generos.map((genero, index) => (
					<>
						<h3 key={index}>{genero.name}</h3>
						<S.GameListGenders>
							<section id="genderSection">
								{games
									.filter((e) => e.genres == genero.name)
									.map((game, index) => (
										<Card game={game} key={index} />
									))}
							</section>
						</S.GameListGenders>
					</>
				))}
			</S.GameList>
		</>
	);
};

export default GameList;
