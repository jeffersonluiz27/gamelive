import * as S from './style';
import Interrogacao from 'assets/icons/interrogacao.svg';
import ButtonCriar from 'components/ButtonCriar';
import ButtonUpdate from 'components/ButtonUpdate';
import ButtonDelete from 'components/ButtonDelete';

const BoxNewGame = () => {
	return (
		<S.NewGame>
			<S.NewGameLeft>
				<h2>Cadastrar Jogo</h2>
				<S.BoxNewGame>
					<S.BoxNewGameForm>
						<S.BoxNewGameImgArea>
							<S.BoxNewGameImg>
								<img src={Interrogacao} alt="" />
							</S.BoxNewGameImg>
							<button> botão aqui</button>
						</S.BoxNewGameImgArea>
						<S.BoxNewGameDiv>
							<input type="text" placeholder="Nome do jogo..." />
							<input type="number" placeholder="Ano de lançamento..." />
						</S.BoxNewGameDiv>
						<S.BoxNewGameDiv>
							<input type="number" placeholder="IMDB Score..." />
							<select>
								<optgroup label="Genero">
									<option value="default"></option>
								</optgroup>
							</select>
						</S.BoxNewGameDiv>
						<S.BoxNewGameDiv>
							<input type="link" placeholder="Trailer Url..." />
							<input type="link" placeholder="Gameplay Url..." />
						</S.BoxNewGameDiv>
						<textarea placeholder="Descrição..."></textarea>
						<ButtonCriar />
					</S.BoxNewGameForm>
				</S.BoxNewGame>
			</S.NewGameLeft>
			<S.NewGameRigth>
				<h2>Cadastrar Genero</h2>
				<S.BoxNewGenre>
					<S.BoxNewGenreForm>
						<input type="text" placeholder="Nome do genero..." />
						<ButtonCriar />
					</S.BoxNewGenreForm>
				</S.BoxNewGenre>
				<h2>Atualizar Genero</h2>
				<S.BoxUpdateGenre>
					<S.BoxUpdateGenreForm>
						<select>
							<optgroup label="Genero">
								<option value="default"></option>
							</optgroup>
						</select>
						<S.BoxUpdateGenreDiv>
							<ButtonDelete />
							<ButtonUpdate />
						</S.BoxUpdateGenreDiv>
					</S.BoxUpdateGenreForm>
				</S.BoxUpdateGenre>
			</S.NewGameRigth>
		</S.NewGame>
	);
};

export default BoxNewGame;
