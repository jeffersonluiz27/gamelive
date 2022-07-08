import Logo from 'components/Logo';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft as Back } from 'react-icons/io';
import * as S from './style';

const HeaderLogo = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderLogo>
			<S.HeaderLogoButton onClick={() => navigate(-1)}>
				<S.HeaderLogoImg>
					<Back />
				</S.HeaderLogoImg>
			</S.HeaderLogoButton>
			<S.HeaderLogoDiv>
				<Logo />
			</S.HeaderLogoDiv>
		</S.HeaderLogo>
	);
};

export default HeaderLogo;
