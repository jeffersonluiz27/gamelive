import styled, { css } from 'styled-components';

export const Home = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
	`}
`;

export const HomeContent = styled.main`
	${() => css`
		width: 100%;
		display: flex;
		justify-content: center;
		grid-row: auto;
		flex-wrap: wrap;
	`}
`;

export const HomeGameList = styled.div`
	${() => css`
		display: flex;
		width: 98%;
		margin-top: 25px;
		padding-bottom: 25px;
	`}
`;