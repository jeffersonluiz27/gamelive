import Logo from 'components/Logo';
import { HiOutlineLogout as Logout } from 'react-icons/hi';
import * as S from './style';

interface MenuProps {
	onLogout: () => void;
}

const HeaderLogo = ({ onLogout }: MenuProps) => {
	return (
		<S.HeaderLogo>
			<S.HeaderLogoButton onClick={onLogout}>
				<S.HeaderLogoImg>
					<Logout />
				</S.HeaderLogoImg>
			</S.HeaderLogoButton>
			<S.HeaderLogoDiv>
				<Logo />
			</S.HeaderLogoDiv>
		</S.HeaderLogo>
	);
};

export default HeaderLogo;
