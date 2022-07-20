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
	${() => css`
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
		top: 0;
		right: 45%;
		left: 45%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;

		svg.star {
			fill: ${theme.colors.buttonGold};
			font-size: 16px;
		}
	`}
`;

export const GameDetailTrailers = styled.section`
	${() => css`
		width: auto;
		height: 80%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-evenly;
	`}

	div.yt {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	div.edit {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

export const GameDetailDesc = styled.section`
	${() => css`
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