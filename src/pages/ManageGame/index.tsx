import BoxManageGame from 'components/BoxManageGame';
import HeaderLogo from 'components/HeaderLogo';
import * as S from './style';

const ManageGame = () => {
	return (
		<S.ManageGame>
			<HeaderLogo />
			<S.ManageGameContent>
				<BoxManageGame />
			</S.ManageGameContent>
		</S.ManageGame>
	);
};

export default ManageGame;
