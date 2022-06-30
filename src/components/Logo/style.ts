import styled, { css } from 'styled-components';

export const BoxLogoText = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle}
		text-transform: uppercase;
		display: flex;
		position: absolute;
		top: 3px;
		color: #fff;
	`}
	@media only screen and (max-width: 1366px) {
		position: relative;
	}
`;
