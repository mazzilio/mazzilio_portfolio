import { navBarType } from '@/types/navbar';
import { NavBarItems } from './navbar-items';
import './navbar.css';
import Flower from '@/assets/mazzilio/Flower.svg';
import { Link } from 'react-router-dom';

// https://john.design/journal/nav-show-hide
type Props = {};

const NavBar = (props: Props) => {
	return (
		<nav className='navbar'>
			<div>
				<div className='navbar__flower-container1'>
					<img
						className='navbar__flower rotate'
						src={Flower}
						alt='flower'
					/>
				</div>
				<div className='navbar__flower-container2'>
					<img
						className='navbar__flower rotate'
						src={Flower}
						alt='flower'
					/>
				</div>
			</div>
			<div className='nav-items-container'>
				{NavBarItems.map((navBarItem: navBarType) => (
					<Link
						key={navBarItem.id}
						to={navBarItem.path}
						className='nav-items-container__items'
					>
						{navBarItem.title}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
