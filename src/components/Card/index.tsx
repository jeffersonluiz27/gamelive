import * as S from './style';
import cover from 'assets/img/valorant.png';
import fav from 'assets/icons/fav2.png';
import { Link } from 'react-router-dom';

interface CardProps {
	game: {
		title: string;
		coverImageUrl: string;
		imdbScore: number;
	};
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
					<img src={fav} alt="" />
					<p>{game.imdbScore} </p>
				</S.CardBotton>
			</section>
		</S.Card>
	);
};

export default Card;
