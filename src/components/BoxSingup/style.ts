import styled, { css } from 'styled-components';

export const BoxSingup = styled.section`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		width: 28%;
		height: 518px;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxSingupLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: space-around;
		align-items: center;
	`}
`;

export const BoxSingupLogoImage = styled.img`
	${() => css`
		width: 15%;
	`}
`;

export const BoxSingupForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 15px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 70%;
		}

		p {
			margin-top: -10px;
			margin-left: 14%;
		}
	`}
`;
