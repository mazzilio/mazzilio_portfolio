import { Link } from 'react-router-dom';
import './home-button.css';

type Props = { ButtonTitle: string };

const HomeButton = ({ ButtonTitle }: Props) => {
	return (
		<Link to='/projects'>
			<button className='home-button'>{ButtonTitle}</button>
		</Link>
	);
};

export default HomeButton;
