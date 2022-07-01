import styled, { css } from 'styled-components';
import { Theme } from 'types/styled-components';

const activeBox = (theme: Theme) => css`
	content: '';
	position: absolute;
	background-color: transparent;
	height: 50px;
	right: 0;
	width: calc(100% - 15px);
	bottom: -50px;
	border-top-right-radius: 25px;
	box-shadow: 0 -25px 0 0 ${theme.colors.baseBg1};
	z-index: 0;
`;

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

const MenuItemModifiers = {
	active: (theme: Theme) => css`
		background-color: ${theme.colors.baseBg1};
		&::before {
			${activeBox(theme)};
			top: -50px;
			transform: scaleY(-1);
		}
		&::after {
			${activeBox(theme)};
		}
	`,
};

type MenuItemStyled = { active: boolean };

export const MenuItem = styled.div<MenuItemStyled>`
	${({ theme, active }) => css`
		height: 80px;
		width: calc(100% - 15px);
		border-radius: 16px 0 0 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		position: relative;
		${active && MenuItemModifiers.active(theme)}
	`}
`;

export const MenuItemButton = styled.button<MenuItemStyled>`
	${({ theme, active }) => css`
		background-color: transparent;
		${theme.mixins.buttonIcon()};
		z-index: 1;
		${active && theme.mixins.buttonIcon(true)};
	`}
`;