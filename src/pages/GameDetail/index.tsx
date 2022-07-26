import * as S from './style';
import Menu from 'components/Menu';
import Modal from 'react-modal';
import Editar from 'components/ButtonPurple';
import ModalEditGame from 'components/ModalEditGame';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { navigationItemsVazio } from 'data/navigation';
import { findByIdService } from 'services/findServices';
import { useEffect, useState } from 'react';
import { gameDetailObj } from 'types/api/Game';
import { AiFillStar as Star } from 'react-icons/ai';

Modal.setAppElement('#root');

const GameDetail = () => {
	const navigate = useNavigate();
	let disabled = '';
	const handleNavigation = (path: RoutePath) => navigate(path);
	const { id } = useParams();
	const [game, setGame] = useState<gameDetailObj>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [refreshGames, setRefreshGames] = useState(false);
	const admin = localStorage.getItem('userAdminStorage');

	useEffect(() => {
		getGameById();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshGames]);

	const openModal = () => {
		setIsModalOpen(true);
	};

	function closeModal() {
		setIsModalOpen(false);
		updateGames(true);
	}

	const getGameById = async () => {
		const response = await findByIdService.findGameById(`${id}`);
		console.log(response);
		setGame(response.data);
	};

	const updateGames = (refreshProf: boolean) => {
		setRefreshGames(refreshProf);
		setTimeout(() => {
			setRefreshGames(false);
		}, 100);
	};

	if (admin === 'false') {
		disabled = 'disabledB';
	}

	return (
		<S.GameDetail>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.removeItem('jwtLocalStorage');
					localStorage.removeItem('userIdStorage');
					localStorage.removeItem('profileId');
					navigate(RoutePath.LOGIN);
				}}
			/>

			<S.GameDetailContent>
				<S.GameDetailTop>
					<section>
						<div>
							<h2>{game?.title}</h2>
						</div>
						<div className="mainAtrib">
							<div className="atrib">
								{game?.year}
								<div>
									{[...Array(game?.imdbScore)].map((e, i) => (
										<Star key={i} className="star" />
									))}
								</div>
							</div>
							<div className="atribh3">
								{game?.genres.map((genre) => (
									<h3>{genre.name}</h3>
								))}
							</div>
						</div>
					</section>
				</S.GameDetailTop>
				<S.GameDetailTrailers>
					<div className="yt">
						<h3>TRAILER</h3>
						<iframe
							id="ytplayer1"
							title="Youtube Trailer"
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
						<img src={game?.coverImageUrl} alt="" width="300" />
						<Editar
							value="Editar"
							type="button"
							onClick={openModal}
							className={disabled}
						/>
					</div>
					<div className="yt">
						<h3>GAMEPLAY</h3>
						<iframe
							id="ytplayer2"
							title="Youtube Gameplay"
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
			<ModalEditGame
				isOpen={isModalOpen}
				closeModal={closeModal}
				title={'Gerenciar Jogo'}
				id={`${id}`}
			/>
		</S.GameDetail>
	);
};

export default GameDetail;
