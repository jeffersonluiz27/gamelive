import theme from 'assets/styles/theme';
import styled, { css } from 'styled-components';

export const Card = styled.div`
	${() => css`
		background: #171b22;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 15px;
		align-items: center;
		max-width: 294px;
		width: 100%;
		min-height: 429px;
		margin-left: 2rem;
		margin-bottom: 3rem;
		transition: 0.4s all;
		box-shadow: rgba(110, 158, 102, 0.3) 0px 3px 5px;

		:hover {
			box-shadow: rgba(110, 158, 102) 0px 3px 9px;
			transform: scale(1.009);
		}

		section {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 10px;
			width: 80%;
		}

	`}
`;



export const CardTitle = styled.h2`
	${({ theme }) => css`
		${theme.colors.textTitle}
		text-align: center;
		width: 90%;
		margin: 0;
		font-size: 12px;
		text-transform: uppercase;
		display: flex;
    justify-content: center;
	`}
`;

export const CardImg = styled.img`
	width: 287px;
	height: 324px;
	border-radius: 25px;
	object-fit: cover;
	cursor: pointer;
`;

export const CardBotton = styled.div`
	width: 100%;
	max-width: 294px;
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;

	.imdb{
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.imdb p{
		margin-right: 5px;
	}

	svg.fav {
		cursor: pointer;
		fill: ${theme.colors.butonRed};
	}

	svg.star {
		fill: ${theme.colors.buttonGold};
		font-size: 16px;
	}
`;
