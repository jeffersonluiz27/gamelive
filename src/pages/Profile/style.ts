import styled, { css } from 'styled-components';

export const Profile = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const ProfileContent = styled.main`
	${() => css`
		height: 60%;
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
	`}
`;
