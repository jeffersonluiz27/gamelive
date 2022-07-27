import * as S from './style';
import Card from 'components/Card';
import { findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameObj } from 'types/api/Game';
import { homepageObj } from 'types/api/Homepage';
import { useLocation } from 'react-router';
import { alertaInfo } from 'utils/alertas';

const GameList = (id: any) => {
	const [favoritos, setFavoritos] = useState<gameObj[]>([]);
	const [homepage, setHomepage] = useState<homepageObj[]>([]);
	const [homeRefresh, sethomeRefresh] = useState(false);
	const location = useLocation();

	useEffect(() => {
		getAllGamesFavoritos();
		getAllGamesGenres();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.key, homeRefresh]);

	const onFav = () => {
		homeRf(true);
	};

	const homeRf = (refreshProf: boolean) => {
		sethomeRefresh(refreshProf);
		setTimeout(() => {
			sethomeRefresh(false);
		}, 100);
	};

	const getAllGamesGenres = async () => {
		const response = await findByIdService.findHomeProfile(id.id);

		if (response.status === 204) {
			alertaInfo.alerta('Não existe game cadastrado!');
		} else {
			setHomepage(response.data.games);
		}
	};

	const getAllGamesFavoritos = async () => {
		const response = await findByIdService.findHomeProfile(id.id);

		if (response.data.favorites) {
			setFavoritos(response.data.favorites.games);
		}
	};

	return (
		<>
			<S.GameList>
				<h2>Favoritos</h2>
				<S.GameListFavoritos>
					{favoritos.map((favorito, index) => (
						<Card
							game={favorito}
							key={index}
							id={id.id}
							onChanges={onFav}
							favIcon="favOn"
						/>
					))}
				</S.GameListFavoritos>
				<h2>Generos</h2>

				{homepage.map((home, index) => (
					<div key={index}>
						<h3>{home.genre}</h3>
						<S.GameListGenders>
							<section className="genderSection">
								{home.title.map((homegame: gameObj, index) => (
									<Card
										game={homegame}
										key={index}
										id={id.id}
										onChanges={onFav}
										favIcon="favOff"
									/>
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
