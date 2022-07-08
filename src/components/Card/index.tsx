import * as S from './style';
import cover from 'assets/img/valorant.png';
import fav from 'assets/icons/fav2.png';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<S.Card>
			<Link to={'/gamedetail'}>
				<S.CardImg src={cover} alt="" />
			</Link>
			<section>
				<S.CardTitle>Valorant</S.CardTitle>
				<S.CardBotton>
					<img src={fav} alt="" />
					<p>Criar estrelas Score IMDB </p>
				</S.CardBotton>
			</section>
		</S.Card>
	);
};

export default Card;
