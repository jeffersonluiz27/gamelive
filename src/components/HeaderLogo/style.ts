import styled, { css } from 'styled-components';

export const HeaderLogo = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	a {
		align-self: center;
	}
	div {
		display: flex;
		width: 90%;
		align-items: center;
		box-sizing: border-box;
	}
`;

export const HeaderLogoImg = styled.img`
	align-self: center;
	margin-left: 34px;
`;

export const HeaderLogoDiv = styled.div`
	display: flex;
	align-self: center;
	justify-content: center;
	box-sizing: border-box;
`;

export const HeaderLogoButton = styled.button`
	${() => css`
		background-color: transparent;
		z-index: 1;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		color: #fff;
	`}
`;
