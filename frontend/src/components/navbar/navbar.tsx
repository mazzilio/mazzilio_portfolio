import './navbar.css';

type Props = {};

const NavBar = (props: Props) => {
	return (
		<div className='navbar-container'>
			<div></div>
			<div className='navbar-container__items'>
				<p>About Me</p>
				<p>Projects</p>
				<p>Blogs</p>
				<p>Contact</p>
			</div>
		</div>
	);
};

export default NavBar;
