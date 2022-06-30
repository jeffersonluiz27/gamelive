import styled, { css } from 'styled-components';

export const Menu = styled.section`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: space-between;
	`}
`;

export const MenuLeft = styled.div`
	${({ theme }) => css`
		display: flex;
		border-radius: 0rem 2.5rem 2.5rem 0rem;
		height: 71px;
		width: 225px;
		background-color: ${theme.colors.primaryColorOpacity};
		margin: 28px 0;
		align-items: center;
		justify-content: space-around;
		font-size: 16px;
		font-weight: 400;
		line-height: 18px;
	`}
`;

export const MenuRight = styled.div`
	${({ theme }) => css`
		display: flex;
		border-radius: 2.5rem 0rem 0rem 2.5rem;
		height: 71px;
		width: 380px;
		background-color: ${theme.colors.primaryColorOpacity};
		margin: 28px 0;
		font-size: 26px;
		font-weight: 400;
		line-height: 30px;
		justify-content: space-around;
		align-items: center;
	`}
`;
