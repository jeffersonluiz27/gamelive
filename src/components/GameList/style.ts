import styled, { css } from 'styled-components';

export const GameList = styled.section`
	${() => css`
		display: flex;
		flex-direction: column;
	`}
`;

export const GameListFavoritos = styled.section`
	display: flex;
`;

export const Card = styled.div`
	${({ theme }) => css`
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
		section {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 10px;
		}
	`}
`;

export const CardTitle = styled.h2`
	${({ theme }) => css`
		${theme.colors.textTitle}
		text-align: center;
		max-width: 90%;
		margin: 0;
		font-size: 29px;
		text-transform: uppercase;
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

	img {
		cursor: pointer;
	}
`;

export const GameListGenders = styled.section`
	display: flex;
	section {
	}
`;

export const GenderCard = styled.div`
	background: #171b22;
	border-radius: 25px;
	width: 418px;
	height: 217px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 15px;
	align-items: center;
	font-size: 40px;
	cursor: pointer;
`;
