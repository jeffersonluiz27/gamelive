import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItemsVazio } from 'data/navigation';
import { findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameDescObj, gameDetailObj } from 'types/api/Game';
import { AiFillStar as Star } from 'react-icons/ai';

const GameDetail = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	const [game, setGame] = useState<gameDetailObj>();
	const { id } = useParams();

	useEffect(() => {
		getGameById();
	}, []);

	const getGameById = async () => {
		const response = await findByIdService.findGameById(`${id}`);
		setGame(response.data);
	};
	return (
		<S.GameDetail>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => navigate(RoutePath.LOGIN)}
			/>

			<S.GameDetailContent>
				<S.GameDetailTop>
					<div>
						<h2>{game?.title}</h2>
					</div>
					<div>
						<h3>{game?.genres[0].name}</h3>
					</div>
					<div>{game?.year}</div>
					<div>
						{[...Array(game?.imdbScore)].map((e, i) => (
							<Star key={i} className="star" />
						))}
					</div>
				</S.GameDetailTop>
				<S.GameDetailTrailers>
					<div className="yt">
						<h3>TRAILER</h3>
						<iframe
							id="ytplayer"
							width="350"
							height="280"
							src={
								'https://www.youtube.com/embed/' +
								game?.trailerYouTubeUrl.substring(32)
							}
							frameBorder="0"
						/>
					</div>
					<div className="edit">
						<img src={game?.coverImageUrl} width="350" />
						<Link to={`/managegame/${game?.id}`}>
							<button>Editar</button>
						</Link>
					</div>
					<div className="yt">
						<h3>GAMEPLAY</h3>
						<iframe
							id="ytplayer"
							width="350"
							height="280"
							src={
								'https://www.youtube.com/embed/' +
								game?.gameplayYouTubeUrl.substring(32)
							}
							frameBorder="0"
						/>
					</div>
				</S.GameDetailTrailers>
				<S.GameDetailDesc>
					<article>{game?.description}</article>
				</S.GameDetailDesc>
			</S.GameDetailContent>
		</S.GameDetail>
	);
};

export default GameDetail;
