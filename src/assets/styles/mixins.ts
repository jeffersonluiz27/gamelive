import { css } from 'styled-components';
import { constants } from './constants';
import { colors } from './colors';


const logoStyle = () => css`
	font-family: ${constants.logoFontFamily};
	font-size: ${constants.logoFontSize};
	line-height: ${constants.logoLineHeight};
`;

const loginStyle = () => css`
	font-family: ${constants.bodyFontFamily};
`;

const input = () => css`
	width: 362px;
	height: 43px;
	background-color: ${colors.baseInput};
	color: ${colors.textInput};
	border-radius: 7px;
	font-size: 18px;
	padding-left: 10px;
	border: solid 1px #ddd;
`;

const buttonPurple = () => css`
	background: ${colors.butonPurple};
	color: ${colors.textColor};
`;

const buttonRed = () => css`
	background: ${colors.butonRed};
	color: ${colors.textColor};
`;

const buttonDefault = () => css`
	width: 142px;
	height: 45px;
	text-transform: uppercase;
	font-size: 22px;
	border-radius: 8px;
	font-weight: 400;
	line-height: 26px;
`;

const buttonChooseImage = () => css`
	width: 142px;
	height: 45px;
	text-transform: uppercase;
	font-size: 22px;
	border-radius: 8px;
	font-weight: 400;
	line-height: 26px;
`;

const buttonIcon = (active = false) => css`
	height: 46px;
	width: 46px;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	color: #fff;
`;

const overlay = () => css`
	background: rgb(0, 0, 0, 0.6);
`;

export const mixins = {
	logoStyle,
	loginStyle,
	input,
	buttonPurple,
	buttonRed,
	buttonDefault,
	buttonChooseImage,
	buttonIcon,
	overlay,
};
