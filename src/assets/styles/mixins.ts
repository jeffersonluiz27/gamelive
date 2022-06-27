import { css } from 'styled-components';
import { constants } from './constants';
import { colors } from './colors';

const logoStyle = () => css`
	font-family: ${constants.logoFontFamily};
	font-size: ${constants.logoFontSize};
	line-height: ${constants.logoLineHeight};
`;

export const mixins = {
	logoStyle,
};
