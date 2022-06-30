import Logo from 'components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import Back from 'assets/icons/returnArrow.svg';
import * as S from './style';

const HeaderLogo = () => {
	return (
		<S.HeaderLogo>
			<Link to="#">
				<S.HeaderLogoImg src={Back} alt="" />
			</Link>
			<S.HeaderLogoDiv>
				<Logo />
			</S.HeaderLogoDiv>
		</S.HeaderLogo>
	);
};

export default HeaderLogo;
