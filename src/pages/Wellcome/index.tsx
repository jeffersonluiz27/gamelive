import { Link, useNavigate } from 'react-router-dom';
import ButtonEnter from 'components/ButtonPurple';
import * as S from './style';
import Logo from 'components/Logo';
import banner from '../../assets/img/wellcomeBanner.png'

const Wellcome = () => {
	return (
		<S.Wellcome>
			<Logo />
			<img src={banner}/>
			<S.WellcomeContent>	
				<article>
					Game Live é um projeto cuja a finalidade é simular um serviço de mídia digital e jogos multijogador online.
					<br/>
					Nele é possivel que um usuario autenticado crie perfis e selecione seus jogos favoritos, de modo que cada perfil 
					<br/>
					tenha os seu proprios jogos favoritos. O perfil é dividido por categorias e existe uma sessão propria pra os favoritos.
					<br/>
					É possivel cadastrar novos jogos e gerenciar usuarios se o usuario autenticado tiver privilégios de administrador.
					<br/>
					Esse projeto foi construido em React TypeScript e ele consome um API em nest criado no modulo passado.
					<br/>
					Projeto criado por Jefferson Silva como projeto final do modulo 5 do curso de programação da Blue Edtech.
					<br/>
					Caso queira ver a documentação da API <a href='https://api-game-live.herokuapp.com/api' target="_Blank">Clique Aqui</a>
					<br/>
					Clique no botão abaixo para ir para a tela de login
					
				</article>
			<Link to={'/login'}>
				<ButtonEnter value="Sing In" type="button" />
			</Link>
			</S.WellcomeContent>
		</S.Wellcome>
	);
};

export default Wellcome;
