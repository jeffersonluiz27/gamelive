import * as S from './style';
import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
	value: string;
} & ButtonType;

const ButtonRed = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonRed {...props}>{value}</S.ButtonRed>;
};

export default ButtonRed;
