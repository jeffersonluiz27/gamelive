import styled, { css } from 'styled-components';

export const Wellcome = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
		color: #ffffff;
	`}
`;
