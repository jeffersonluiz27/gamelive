import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';

const Homepage = () => {
	return (
		<>
			<S.Home>
				<Menu active={RoutePath.HOME} navItems={navigationItems} />
				<S.HomeContent></S.HomeContent>
			</S.Home>
		</>
	);
};

export default Homepage;
