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
		const response = await findAllService.allGenres();

		console.log('generos exibidos', response.data);
		setGeneros(response.data);
	};

	const getAllGamesFavoritos = async () => {
		const response = await findByIdService.findProfileById(`${profileId}`);

		console.log('favoritos exibidos', response.data.games);
		setFavoritos(response.data.games);
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
			console.log('games exibidos', response.data);
			setGames(response.data);
		}
	};

	return (
		<>
			<S.GameList>
				<h2>Favoritos</h2>
				<S.GameListFavoritos>
					{favoritos.map((favorito, index) => (
						<Card game={favorito} key={index + 4} />
					))}
				</S.GameListFavoritos>
				<h2>Generos</h2>
				{generos.map((genero, index) => (
					<>
						<h3 key={index + 2}>{genero.name}</h3>
						<S.GameListGenders>
							<section className="genderSection">
								{games.map((e, index) => (
									<Card game={e} key={index + 3} />
								))}
							</section>
						</S.GameListGenders>
					</>
				))}
			</S.GameList>
		</>
	);
};
/* .filter((e) => e.genres === genero.name) */
export default GameList;
