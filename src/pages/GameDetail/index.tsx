import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItemsUser } from 'data/navigation';
import { NavItem } from '../../components/Menu/types';

const GameDetail = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	return (
		<S.GameDetail>
			<Menu
				navItems={navigationItemsUser}
				onNavigate={handleNavigation}
				onLogout={() => navigate(RoutePath.LOGIN)}
			/>

			<S.GameDetailContent>
				<S.GameDetailTop>Icones</S.GameDetailTop>
				<S.GameDetailTrailers>Trailers</S.GameDetailTrailers>
				<S.GameDetailDesc>
					<article>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa
						fugiat quos perferendis quisquam nobis possimus, modi, doloremque
						excepturi illum dolorum recusandae assumenda accusantium facere
						consequuntur molestias voluptatem vel iure.
					</article>
				</S.GameDetailDesc>
			</S.GameDetailContent>
		</S.GameDetail>
	);
};

export default GameDetail;
