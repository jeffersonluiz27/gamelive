import BoxNewGame from 'components/NewGame';
import HeaderLogo from 'components/HeaderLogo';
import * as S from './style';

const NewGame = () => {
	return (
		<S.NewGame>
			<HeaderLogo />
			<S.NewGameContent>
				<BoxNewGame />
			</S.NewGameContent>
		</S.NewGame>
	);
};

export default NewGame;
