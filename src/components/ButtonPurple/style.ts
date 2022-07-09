import styled, { css } from 'styled-components';

export const ButtonPurple = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonDefault}
		${theme.mixins.buttonPurple}
		align-self: center;
		cursor: pointer;
	`}
`;
