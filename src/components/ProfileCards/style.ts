import styled, { css } from 'styled-components';

export const ProfileCards = styled.section`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70%;
		gap: 30px;
	`}
`;

export const ProfileCardsContent = styled.div`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		background-size: cover;
		flex-direction: column;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			width: 150px;
			height: 150px;
			border-radius: 50%;
			cursor: pointer;
		}

		svg {
			cursor: pointer;
		}
	`}
`;

export const ProfileCardsPlus = styled.div`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 2%;
		position: relative;
		svg {
			width: 50px;
			height: 50px;
			cursor: pointer;
		}
	`}
`;
