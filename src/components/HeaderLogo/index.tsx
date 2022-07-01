import Logo from 'components/Logo';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Back from 'assets/icons/returnArrow.svg';
import * as S from './style';

const HeaderLogo = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderLogo>
			<S.HeaderLogoButton onClick={() => navigate(-1)}>
				<S.HeaderLogoImg src={Back} alt="" />
			</S.HeaderLogoButton>
			<S.HeaderLogoDiv>
				<Logo />
			</S.HeaderLogoDiv>
		</S.HeaderLogo>
	);
};

export default HeaderLogo;
