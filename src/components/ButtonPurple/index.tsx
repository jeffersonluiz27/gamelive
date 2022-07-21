import * as S from './style';
import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
	value: string;
} & ButtonType;

const ButtonPurple = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonPurple {...props}>{value}</S.ButtonPurple>;
};

export default ButtonPurple;
