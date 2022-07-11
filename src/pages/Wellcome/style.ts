import styled, { css } from 'styled-components';


export const Wellcome = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		width: 100%;
		height: 100vh;
		color: #ffffff;
	`}

	img{
			width: 100%;
		}
`;


export const WellcomeContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		article{
			font-size: 16px;
			font-weight: 400;
			margin: 20px;
			text-align: justify;
			
		}

		article a{
			text-decoration: none;
			color: ${theme.colors.buttonGold};
		}
	`}
`;
