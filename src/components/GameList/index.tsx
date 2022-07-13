import * as S from './style';
import Card from 'components/Card';
import swall from 'sweetalert';
import { findAllService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { gameObj } from 'types/api/Game';

const GameList = () => {
	const navigate = useNavigate();
	const [games, setGames] = useState<gameObj[]>([]);

	const jwt = localStorage.getItem('jwtLocalStorage');

	useEffect(() => {
		getAllGames();
	}, []);

	const getAllGames = async () => {
		if (!jwt) {
			swall({
				title: 'ERRO!',
				text: 'Faça o login antes de entrar na página inicial',
				icon: 'error',
				timer: 7000,
			});
			navigate(RoutePath.LOGIN);
		} else {
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
		}
	};
	return (
		<>
			<S.GameList>
				<h2>Favoritos</h2>
				<S.GameListFavoritos></S.GameListFavoritos>
				<h2>Generos</h2>
				<h3>Ação</h3>
				<S.GameListGenders>
					<section id="genderSection">
						{games.map((game, index) => (
							<Card game={game} key={index} />
						))}
					</section>
				</S.GameListGenders>
			</S.GameList>
		</>
	);
};

export default GameList;
