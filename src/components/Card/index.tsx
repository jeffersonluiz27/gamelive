import * as S from './style';
import {AiOutlineHeart as Heart} from 'react-icons/ai'
import {AiFillStar as Star} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { gameObj } from 'types/api/Game';
import { updateService } from 'services/updateService';
import { useEffect, useState } from 'react';
import { findByIdService } from 'services/findServices';

interface CardProps {
	game: gameObj;
	id: string;
	onChanges: any;
	favIcon: string;
}

const Card = ({ game, id, onChanges, favIcon }: CardProps) => {
	const favoritos = async () => {
		const favGame = { favoriteGameId: `${game.id}` };
		const response = await updateService.updateFavorito(id, favGame);
		onChanges(response);
	};
	return (
		<S.Card>
			<Link to={`/gamedetail/${game.id}`}>
				<S.CardImg src={game.coverImageUrl} alt="" />
			</Link>
			<section>
				<S.CardTitle>{game.title}</S.CardTitle>
				<S.CardBotton>
					<Heart className={favIcon} onClick={favoritos} />
					<div className="imdb">
						<p>IMDB</p>
						{[...Array(game.imdbScore)].map((e, i) => (
							<Star key={i} className="star" />
						))}
					</div>
				</S.CardBotton>
			</section>
		</S.Card>
	);
};

export default Card;
