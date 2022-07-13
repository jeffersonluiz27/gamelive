import styled, { css } from 'styled-components';

export const BoxEditUser = styled.section`
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

export const BoxEditUserLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 10px;
	`}
`;

export const BoxEditUserLogoImage = styled.img`
	${() => css`
		width: 15%;
	`}
`;

export const BoxEditUserForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 24px;
		justify-content: center;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 70%;
		}

		p {
			margin-top: -10px;
			margin-left: 14%;
		}

		#buttons {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 45px;
		}

		#resetSenha {
			width: 16rem;
		}
	`}
`;

export const BoxEditUserError = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.secondaryColor};
		text-align: center;
		display: inline-block;
		margin-top: 25px;
	`}
`;

export const BoxEditUserSearch = styled.div`
	${({ theme }) => css`
		align-self: center;
		display: flex;
		align-items: center;
		${theme.mixins.input()};
		width: 70%;
		gap: 10px;
		border: solid 1px #ddd;

		input {
			background: transparent;
			border: none;
			height: 70%;
			width: 80%;
		}

		input:focus {
			outline: none;
		}
	`}
`;
