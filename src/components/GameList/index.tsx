import * as S from './style';
import Card from 'components/Card';
import swall from 'sweetalert';
import { findAllService } from 'services/gameServices';
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
				<S.GameListFavoritos>
					{games.map((game, index) => (
						<Card game={game} key={index} />
					))}
				</S.GameListFavoritos>
				<h2>Generos</h2>
				<S.GameListGenders>
					<section>
						<S.GenderCard>FPS</S.GenderCard>
					</section>
				</S.GameListGenders>
			</S.GameList>
		</>
	);
};

export default GameList;
