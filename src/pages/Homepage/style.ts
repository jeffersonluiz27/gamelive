import styled, { css } from 'styled-components';

export const Home = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const HomeContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: center;
		grid-row: auto;
		flex-wrap: wrap;
	`}
`;

export const HomeGameList = styled.div`
	${() => css`
		margin-top: 25px;
		padding-bottom: 25px;
	`}
`;