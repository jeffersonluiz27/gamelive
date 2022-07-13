import * as S from './style';
import logo from 'assets/img/logo.png';
import { AiOutlineSearch as Search } from 'react-icons/ai';
import ButtonAtualizar from 'components/ButtonPurple';
import ButtonDeletar from 'components/ButtonRed';
import ButtonResetSenha from 'components/ButtonRed';

const BoxEditUser = () => {
	return (
		<S.BoxEditUser>
			<S.BoxEditUserLogo>
				<S.BoxEditUserLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxEditUserLogo>
			<S.BoxEditUserForm>
				<S.BoxEditUserSearch>
					<Search />
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Pesquise o usuário..."
					/>
				</S.BoxEditUserSearch>
				<input type="text" name="name" id="name" placeholder="Nome..." />
				<input type="email" name="email" id="email" placeholder="Email..." />
				<ButtonResetSenha value="Resetar Senha" type="button" id="resetSenha" />
				<div id="buttons">
					<ButtonDeletar value="Deletar" type="button" />
					<ButtonAtualizar value="Atualizar" type="button" />
				</div>
			</S.BoxEditUserForm>
		</S.BoxEditUser>
	);
};

export default BoxEditUser;
