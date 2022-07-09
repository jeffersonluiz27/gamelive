import * as S from './style';
import Card from 'components/Card';

const GameList = () => {
	return (
		<S.GameList>
			<h2>Favoritos</h2>
			<S.GameListFavoritos>
				<Card />
				<Card />
				<Card />
				<Card />
			</S.GameListFavoritos>
			<h2>Generos</h2>
			<S.GameListGenders>
				<section>
					<S.GenderCard>FPS</S.GenderCard>
				</section>
			</S.GameListGenders>
		</S.GameList>
	);
};

export default GameList;
