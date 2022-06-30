import styled, { css } from 'styled-components';

export const Singup = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const SingupContent = styled.main`
	${({ theme }) => css`
		${theme.mixins.overlay};
		width: 100%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	`}
`;
