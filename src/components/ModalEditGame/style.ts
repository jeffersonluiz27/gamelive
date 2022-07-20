import styled, { css } from 'styled-components';

export const ModalEditGame = styled.section`
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

export const BoxManageGameDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const BoxManageGameDivButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const BoxManageGameForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 15px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 45%;
			height: 25px;
		}

		textarea {
			${theme.mixins.input};
			align-self: center;
			width: 70%;
			height: 50px;
			margin-bottom: 8px;
		}

		select {
			${theme.mixins.input};
			align-self: center;
			width: 48%;
			height: 32px;
		}

		p {
			margin-top: -10px;
			margin-left: 14%;
		}
	`}
`;

export const BoxManageGameImgArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BoxNManageGameImg = styled.div`
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
		width: 120px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		margin-right: 16px;
	}

	#thumbnail input {
		display: none;
	}

	#thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	#thumbnail.has-thumbnail {
		border: none;
	}

	#thumbnail.has-thumbnail img {
		display: none;
	}
`;
