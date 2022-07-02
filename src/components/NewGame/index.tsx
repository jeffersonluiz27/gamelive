import * as S from './style';
import Interrogacao from 'assets/icons/interrogacao.svg';
import ButtonCriar from 'components/ButtonPurple';
import { useMemo, useState } from 'react';
import ManageGenre from 'components/ManageGenre';

const BoxNewGame = () => {
	const [thumbnail, setThumbnail] = useState<FileList | null>(null);
	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail[0]) : null;
	}, [thumbnail]);

	return (
		<S.NewGame>
			<S.NewGameLeft>
				<h2>Cadastrar Jogo</h2>
				<S.BoxNewGame>
					<S.BoxNewGameForm>
						<S.BoxNewGameImgArea>
							<S.BoxNewGameImg>
								<label
									id="thumbnail"
									style={{ backgroundImage: `url(${preview})` }}
									className={thumbnail ? 'has-thumbnail' : ''}
								>
									<input
										type="file"
										name="thumbnail"
										onChange={(event) => setThumbnail(event.target.files)}
									/>
									<img
										src={Interrogacao}
										alt="Logo que representa uma interrogação"
									/>
								</label>
							</S.BoxNewGameImg>
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
						<ButtonCriar value="Criar" type="button" />
					</S.BoxNewGameForm>
				</S.BoxNewGame>
			</S.NewGameLeft>
			<S.NewGameRigth>
				<ManageGenre />
			</S.NewGameRigth>
		</S.NewGame>
	);
};

export default BoxNewGame;
