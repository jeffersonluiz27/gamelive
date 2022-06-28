import styled, { css } from 'styled-components';

export const Login = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const LoginContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		${theme.mixins.overlay};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`}
`;
