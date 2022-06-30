import HeaderLogo from 'components/HeaderLogo';
import * as S from './style';

const NewGame = () => {
	return (
		<S.NewGame>
			<HeaderLogo />
			<S.NewGameContent></S.NewGameContent>
		</S.NewGame>
	);
};

export default NewGame;
