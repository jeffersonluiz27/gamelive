import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
	value: string;
} & ButtonType;

const ButtonLogin = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonLogin {...props}>{value}</S.ButtonLogin>;
};

export default ButtonLogin;
