import styled, { css } from 'styled-components';

export const BoxLogin = styled.section`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		width: 28%;
		height: 427px;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxLoginLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: space-around;
		align-items: center;
	`}
`;

export const BoxLoginLogoImage = styled.img`
	${() => css`
		width: 15%;
	`}
`;

export const BoxLoginForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 15px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 70%;
			margin-bottom: 26px;
		}

		p {
			margin-top: -10px;
			margin-left: 14%;
		}
	`}
`;

export const BoxLoginError = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.secondaryColor};
		text-align: center;
		display: inline-block;
		margin-top: 25px;
	`}
`;