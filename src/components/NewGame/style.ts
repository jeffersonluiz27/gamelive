import styled, { css } from 'styled-components';

export const NewGame = styled.section`
	${({ theme }) => css`
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
`;