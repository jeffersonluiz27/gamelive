import styled, { css } from 'styled-components';

export const UserEdit = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const UserEditContent = styled.main`
	${() => css`
		width: 100%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		h2 {
			font-size: 40px;
			font-weight: 400;
			line-height: 46px;
			margin-bottom: 0px;
		}
	`}
`;