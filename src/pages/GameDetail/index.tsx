import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItemsVazio } from 'data/navigation';
import { findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameDescObj } from 'types/api/Game';

const GameDetail = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	const [game, setGame] = useState<gameDescObj>();
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
				<S.GameDetailTop>Icones</S.GameDetailTop>
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
					<div></div>
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
