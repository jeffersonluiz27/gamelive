import styled, { css } from 'styled-components';

export const ButtonRed = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonDefault}
		${theme.mixins.buttonRed}
		align-self: center;
		cursor: pointer;
	`}
`;
