import * as S from './style';
import ButtonCriar from 'components/ButtonPurple';
import ButtonUpdate from 'components/ButtonPurple';
import ButtonDelete from 'components/ButtonRed';

const ManageGenre = () => {
	return (
		<>
			<h2>Cadastrar Genero</h2>
			<S.BoxNewGenre>
				<S.BoxNewGenreForm>
					<input type="text" placeholder="Nome do genero..." />
					<ButtonCriar value="Criar" type="button" />
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
						<ButtonDelete value="Deletar" type="button" />
						<ButtonUpdate value="Atualizar" type="button" />
					</S.BoxUpdateGenreDiv>
				</S.BoxUpdateGenreForm>
			</S.BoxUpdateGenre>
		</>
	);
};

export default ManageGenre;
