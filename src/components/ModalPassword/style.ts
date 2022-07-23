import styled, { css } from 'styled-components';

export const ModalPassword = styled.section`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		max-height: 427px;
		padding: 20px 20px 35px 20px;
		margin: 10px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;
