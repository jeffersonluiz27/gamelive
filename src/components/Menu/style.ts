import styled, { css } from 'styled-components';

export const Menu = styled.section`
	${() => css`
		width: 100%;
		display: flex;
		justify-content: space-between;
	`}
`;

export const MenuLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: center;

		img {
			width: 80px;
		}
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
		box-sizing: border-box;

		nav {
			display: flex;
		}
	`}
`;

export const MenuItemLogout = styled.button`
	${() => css`
		height: 45px;
		width: 45px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		color: #fff;
		z-index: 1;
		background-color: transparent;

		svg {
			width: 36px;
			height: 36px;
		}
	`}
`;

export const MenuItem = styled.div`
	${() => css`
		height: 80px;
		width: calc(100% - 15px);
		border-radius: 16px 0 0 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		position: relative;
	`}
`;

export const MenuItemButton = styled.button`
	${() => css`
		background-color: transparent;
		z-index: 1;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		color: #fff;
	`}
`;
