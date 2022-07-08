import styled, { css } from 'styled-components';

export const GameDetail = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
	`}
`;

export const GameDetailContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: center;
		grid-row: auto;
		flex-wrap: wrap;
	`}
`;
