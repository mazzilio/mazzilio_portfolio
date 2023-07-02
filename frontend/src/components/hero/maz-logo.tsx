import M from '@/assets/mazzilio/M.svg';
import A from '@/assets/mazzilio/A.svg';
import Z from '@/assets/mazzilio/Z.svg';
import Flower from '@/assets/mazzilio/Flower.svg';
import './maz-logo.css';

type Props = {};

const MazLogo = (props: Props) => {
	return (
		<div>
			<div className='mazzilio-logo__flower-container1'>
				<img
					className='mazzilio-logo__flower'
					src={Flower}
					alt='flower'
				/>
			</div>
			<div className='maz-container'>
				<img className='mazzilio_hero hero-M' src={M} alt='M' />
				<img className='mazzilio_hero hero-A' src={A} alt='A' />
				<img className='mazzilio_hero hero-Z' src={Z} alt='Z' />
			</div>
			<div className='mazzilio-logo__flower-container2'>
				<img
					className='mazzilio-logo__flower'
					src={Flower}
					alt='flower'
				/>
			</div>
		</div>
	);
};

export default MazLogo;
