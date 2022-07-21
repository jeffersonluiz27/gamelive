import * as S from './style';
import Logo from 'components/Logo';
import { HiOutlineLogout as Logout } from 'react-icons/hi';
import { IoIosArrowDropleft as Back } from 'react-icons/io';

interface MenuProps {
	onLogout: () => void;
	local: string;
}

let Icone = Logout;

const HeaderLogo = ({ onLogout, local }: MenuProps) => {
	if (local === 'singup') {
		Icone = Back;
	}

	return (
		<S.HeaderLogo>
			<S.HeaderLogoButton onClick={onLogout}>
				<S.HeaderLogoImg>
					<Icone />
				</S.HeaderLogoImg>
			</S.HeaderLogoButton>
			<S.HeaderLogoDiv>
				<Logo />
			</S.HeaderLogoDiv>
		</S.HeaderLogo>
	);
};

export default HeaderLogo;
