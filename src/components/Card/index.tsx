import * as S from './style';
import {AiOutlineHeart as Heart} from 'react-icons/ai'
import {AiFillStar as Star} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { gameObj } from 'types/api/Game';

interface CardProps {
	game: gameObj,
}

const Card = ({ game }: CardProps) => {
	return (
		<S.Card>
			<Link to={'/gamedetail'}>
				<S.CardImg src={game.coverImageUrl} alt="" />
			</Link>
			<section>
				<S.CardTitle>{game.title}</S.CardTitle>
				<S.CardBotton>
					<Heart className='fav' />
					<p className='imdb'> <p>IMDB</p> {
						 [...Array(game.imdbScore)].map((e, i) =>(
							<Star key={i} className='star'/>
						 ))
						} </p>
				</S.CardBotton>
			</section>
		</S.Card>
	);
};

export default Card;
