import styled, { css } from 'styled-components';

export const BoxLogin = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.baseBg1};
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
		color: ${theme.colors.textColor};
	`}
`;
