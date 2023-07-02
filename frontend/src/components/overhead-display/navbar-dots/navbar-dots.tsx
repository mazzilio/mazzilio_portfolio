import { navBarType } from '@/types/navbar';
import { NavBarItems } from '../../navbar/navbar-items';
import Flower from '@/assets/mazzilio/Flower.svg';
import './navbar-dots.css';

type Props = { active: string };

const NavBarDots = ({ active }: Props) => {
	return (
		<div className='app_navigation'>
			{NavBarItems.map((navBarItem: navBarType) => (
				<li key={navBarItem.id}>
					<a href={navBarItem.path} className='app__navigation-dot'>
						<img src={Flower} alt={navBarItem.title} />
					</a>
				</li>
			))}
		</div>
	);
};

export default NavBarDots;
