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

	.favSection {
		width: 100%;
		display: flex;
		overflow-y: auto;
		align-items: center;
	}
	.favSection::-webkit-scrollbar {
		height: 15px;
	}
	.favSection::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 10px;
		border: #6f9e662a solid 0.8px;
	}

	.favSection::-webkit-scrollbar-track {
		border: none;
	}

	.favSection::-webkit-scrollbar-thumb:hover {
		background: #6e9e66;
	}
`;

export const GameListGenders = styled.section`
	display: flex;

	.genderSection {
		width: 100%;
		display: flex;
		overflow-y: auto;
		align-items: center;
	}
	.genderSection::-webkit-scrollbar {
		height: 15px;
	}
	.genderSection::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 10px;
		border: #6f9e662a solid 0.8px;
	}

	.genderSection::-webkit-scrollbar-track {
		border: none;
	}

	.genderSection::-webkit-scrollbar-thumb:hover {
		background: #6e9e66;
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

