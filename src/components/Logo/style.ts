import styled, { css } from 'styled-components';

export const BoxLogoText = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle}
		text-transform: uppercase;
		display: flex;
		color: #fff;
		align-items: center;
		justify-content: center;
		height: 10%;
	`}
`;
