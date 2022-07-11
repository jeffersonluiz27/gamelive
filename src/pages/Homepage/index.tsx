import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import GameList from 'components/GameList';
import swall from 'sweetalert';
import {gameObj} from 'types/api/Game'
import { findAllService } from 'services/gameServices';
import { useEffect, useState } from 'react';

const Homepage = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	const [games, setGames] = useState<gameObj[]>([]);

	const jwt = localStorage.getItem('jwtLocalStorage')
	
	useEffect(() => {
    getAllGames();
  }, []);

	const getAllGames = async () => {
    if(!jwt) {
      swall({
        title: 'ERRO!',
        text: 'Faça o login antes de entrar na página inicial',
        icon: 'error',
        timer: 7000,
      })
      navigate(RoutePath.LOGIN)
    } else {
      const response = await findAllService.allGames();

      if(response === 204) {
        swall({
          title: 'Info',
          text: 'Não existe personagem cadastrado!',
          icon: 'info',
          timer: 7000,
        })
      }else {
        console.log('Personagens exibidos', response);
        /* setGames(response.data.results); */
      }

    }
	}

	return (
		<S.Home>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => { 
					localStorage.setItem('jwtLocalStorage', '')
					navigate(RoutePath.LOGIN)
				}}
			/>
			<S.HomeContent>
				<S.HomeGameList>
					<GameList />
				</S.HomeGameList>
			</S.HomeContent>
		</S.Home>
	);
};

export default Homepage;
