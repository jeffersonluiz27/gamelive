import styled, { css } from 'styled-components';

export const NewGame = styled.section`
	${() => css`
		width: 90%;
		display: flex;
		justify-content: center;
		justify-items: center;
		align-items: center;
	`}
`;

export const NewGameLeft = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const NewGameRigth = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const BoxNewGame = styled.div`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		width: 80%;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxNewGameDiv = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.basic-multi-select {
			background-color: ${theme.colors.baseInput};
			color: ${theme.colors.textInput};
			border-radius: 7px;
			font-size: 18px;
			width: 232px;
		}

		.basic-multi-select > div {
			background-color: ${theme.colors.baseInput};
			color: ${theme.colors.textInput};
		}
	`}
`;

export const BoxNewGameForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 15px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 45%;
		}

		textarea {
			${theme.mixins.input};
			align-self: center;
			width: 70%;
			height: 85px;
			margin-bottom: 8px;
		}

		select {
			${theme.mixins.input};
			align-self: center;
			width: 47%;
		}

		p {
			margin-top: -10px;
			margin-left: 14%;
		}
	`}
`;

export const BoxNewGameImgArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BoxNewGameImg = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;

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