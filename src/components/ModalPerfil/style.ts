import styled, { css } from 'styled-components';

export const ModalPerfil = styled.section`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		max-height: 427px;
		padding: 20px 20px 35px 20px;
		margin: 10px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxLoginForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 25px;
		align-items: center;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 80%;
		}

		#thumbnail {
			margin-bottom: 20px;
			background: #d9d9d9;
			border: 1px dashed #ddd;
			background-size: cover;
			width: 157px;
			height: 157px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			margin-right: 16px;
		}

		#thumbnail img {
			width: 150px;
			height: 150px;
			object-fit: fill;
		}
	`}

	#thumbnail input {
		display: none;
	}

	#thumbnail.has-thumbnail {
		border: none;
	}

	#thumbnail.has-thumbnail img {
		display: none;
	}
`;
