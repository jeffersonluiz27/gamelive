import * as S from './style';
import Card from 'components/Card';
import swall from 'sweetalert';
import { findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameObj } from 'types/api/Game';
import { homepageObj } from 'types/api/Homepage';
import { useLocation } from 'react-router';

const GameList = (id: any) => {
	const [favoritos, setFavoritos] = useState<gameObj[]>([]);
	const [homepage, setHomepage] = useState<homepageObj[]>([]);
	const profileId = localStorage.getItem('profileId');
	const location = useLocation();

	useEffect(() => {
		getAllGamesFavoritos();
		getAllGamesGenres();
	}, [location.key]);

	const getAllGamesGenres = async () => {
		const response = await findByIdService.findHomeProfile(id.id);

		if (response.status === 204) {
			swall({
				title: 'Info',
				text: 'Não existe game cadastrado!',
				icon: 'info',
				timer: 7000,
			});
		} else {
			console.log('games por genero exibidos', response.data.games);
			setHomepage(response.data.games);
		}
	};

	const getAllGamesFavoritos = async () => {
		const response = await findByIdService.findHomeProfile(id.id);

		console.log('favoritos exibidos', response.data.favorites.games);
		setFavoritos(response.data.favorites.games);
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

				{homepage.map((home, index) => (
					<div key={index}>
						<h3>{home.genre}</h3>
						<S.GameListGenders>
							<section className="genderSection">
								{home.title.map((homegame: gameObj, index) => (
									<Card game={homegame} key={index} />
								))}
							</section>
						</S.GameListGenders>
					</div>
				))}
			</S.GameList>
		</>
	);
};

export default GameList;
