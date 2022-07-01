import styled, { css } from 'styled-components';

export const ButtonCriar = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonDefault}
		${theme.mixins.buttonRed}
		align-self: center;
		cursor: pointer;
	`}
`;
