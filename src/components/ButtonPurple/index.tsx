import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
	value: string;
} & ButtonType;

const ButtonPurple = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonPurple {...props}>{value}</S.ButtonPurple>;
};

export default ButtonPurple;
