import styled, { css } from 'styled-components';

export const ManageGame = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const ManageGameContent = styled.main`
	${() => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h2 {
			font-size: 40px;
			font-weight: 400;
			line-height: 46px;
			margin-bottom: 0px;
		}
	`}
`;
