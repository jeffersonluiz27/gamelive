import * as S from './style';
import cover from 'assets/img/valorant.png';
import fav from 'assets/icons/fav2.png';
import { Link } from 'react-router-dom';

const GameList = () => {
	return (
		<section>
			<S.GameList>
				<h2>Favoritos</h2>
				<S.GameListFavoritos>
					<S.Card>
						<Link to={'/manageGame'}>
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
				</S.GameListFavoritos>
				<h2>Generos</h2>
				<S.GameListGenders>
					<section>
						<S.GenderCard>FPS</S.GenderCard>
					</section>
				</S.GameListGenders>
			</S.GameList>
		</section>
	);
};

export default GameList;
