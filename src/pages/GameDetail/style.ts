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
	${({}) => css`
		width: 100%;
		height: 70%;
		display: flex;
		grid-row: auto;
		flex-direction: column;
		box-sizing: border-box;
	`}
`;

export const GameDetailTop = styled.section`
	${({ theme }) => css`
		width: auto;
		border: #fff solid 1px;
		height: 10%;
	`}
`;

export const GameDetailTrailers = styled.section`
	${({ theme }) => css`
		width: auto;
		height: 70%;
		border: #fff solid 1px;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	`}
`;

export const GameDetailDesc = styled.section`
	${({ theme }) => css`
		display: flex;
		width: auto;
		height: 20%;
		background-color: #00000040;
		text-align: center;
		justify-content: center;
		align-items: center;

		article {
			width: 50%;
			display: inline-block;
		}
	`}
`;