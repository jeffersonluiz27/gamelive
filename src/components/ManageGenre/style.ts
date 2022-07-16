import styled, { css } from 'styled-components';

export const BoxNewGenre = styled.div`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		width: 60%;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxNewGenreForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 25px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 60%;
		}
	`}
`;

export const BoxUpdateGenre = styled.div`
	${({ theme }) => css`
		${theme.mixins.loginStyle};
		background: ${theme.colors.baseForm2};
		color: ${theme.colors.textInput};
		width: 60%;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
	`}
`;

export const BoxUpdateGenreForm = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 25px;

		input {
			${theme.mixins.input};
			align-self: center;
			width: 60%;
		}

		select {
			${theme.mixins.input};
			align-self: center;
			width: 60%;
		}
	`}
`;

export const BoxUpdateGenreDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
