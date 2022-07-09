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
	${() => css`
		width: 100%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	`}
`;
