import Logo from 'components/Logo';
import { IconType } from 'react-icons';
import { HiOutlineLogout as Logout } from 'react-icons/hi';
import { IoIosArrowDropleft as Back } from 'react-icons/io';
import * as S from './style';
interface MenuProps {
	onLogout: () => void;
	local: string;
}

interface Icon {
	Icone: IconType;
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
