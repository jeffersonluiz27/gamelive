import styled, { css } from 'styled-components';

export const GameList = styled.section`
	${() => css`
		display: flex;
		flex-direction: column;
		width: 100%;
	`}
`;

export const GameListFavoritos = styled.section`
	display: flex;
	align-items: center;
`;

export const GameListGenders = styled.section`
	display: flex;
	.genderSection {
		display: flex;
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
