import * as S from './style';
import capa from 'assets/icons/interrogacao.svg';
import ButtonUpdate from 'components/ButtonPurple';
import ButtonDelete from 'components/ButtonRed';

const BoxManageGame = () => {
	return (
		<S.ManageGame>
			<h2>Editar Jogo</h2>
			<S.BoxManageGame>
				<S.BoxManageGameForm>
					<S.BoxManageGameImgArea>
						<S.BoxNManageGameImg>
							<label id="thumbnail" className="thumbnail">
								<img
									src={/* game.coverImageUrl ? game.coverImageUrl : */ capa}
									alt="Logo que representa uma interrogação"
								/>
							</label>
							<input
								type="link"
								name="coverImageUrl"
								id="coverImageUrl"
								placeholder="Url Imagem da Capa..."
								required
							/>
						</S.BoxNManageGameImg>
					</S.BoxManageGameImgArea>
					<S.BoxManageGameDiv>
						<input type="text" placeholder="Nome do jogo..." />
						<input type="number" placeholder="Ano de lançamento..." />
					</S.BoxManageGameDiv>
					<S.BoxManageGameDiv>
						<input type="number" placeholder="IMDB Score..." />
						<select>
							<optgroup label="Genero">
								<option value="default"></option>
							</optgroup>
						</select>
					</S.BoxManageGameDiv>
					<S.BoxManageGameDiv>
						<input type="link" placeholder="Trailer Url..." />
						<input type="link" placeholder="Gameplay Url..." />
					</S.BoxManageGameDiv>
					<textarea placeholder="Descrição..."></textarea>
					<S.BoxManageGameDivButton>
						<ButtonDelete value="Deletar" type="button" />
						<ButtonUpdate value="Atualizar" type="button" />
					</S.BoxManageGameDivButton>
				</S.BoxManageGameForm>
			</S.BoxManageGame>
		</S.ManageGame>
	);
};

export default BoxManageGame;
