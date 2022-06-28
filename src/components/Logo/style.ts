import styled, { css } from 'styled-components';

export const BoxLogoText = styled.h1`
	${({ theme }) => css`
		font-family: ${theme.constants.logoFontFamily};
		font-size: 4em;
		line-height: 8px;
		text-transform: uppercase;
		display: flex;
		position: absolute;
		top: 3px;
		color: #fff;
	`}
`;
