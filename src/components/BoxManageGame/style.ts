import styled, { css } from 'styled-components';

export const ManageGame = styled.section`
	${({ theme }) => css`
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
	`}
`;

export const BoxManageGame = styled.div`
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
		cursor: pointer;
		width: 157px;
		height: 157px;
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
		width: 157px;
		height: 157px;
		object-fit: fill;
	}

	#thumbnail.has-thumbnail {
		border: none;
	}

	#thumbnail.has-thumbnail img {
		display: none;
	}
`;
