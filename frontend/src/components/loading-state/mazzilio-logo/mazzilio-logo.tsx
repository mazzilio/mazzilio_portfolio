import M from '../../../assets/mazzilio/M.svg';
import A from '../../../assets/mazzilio/A.svg';
import Z from '../../../assets/mazzilio/Z.svg';
import Z1 from '../../../assets/mazzilio/Z1.svg';
import I from '../../../assets/mazzilio/I.svg';
import L from '../../../assets/mazzilio/L.svg';
import O from '../../../assets/mazzilio/O.svg';
import Flower from '../../../assets/mazzilio/Flower.svg';

import './mazzilio-logo.css';

type Props = {};

const MazzilioLogo = (props: Props) => {
	return (
		<div className='logo'>
			<div className='flower-container1'>
				<img className='flower rotate' src={Flower} alt='flower' />
			</div>
			<div className='mazzilio-container1 float'>
				<img className='mazzilio_image M' src={M} alt='M' />
				<img className='mazzilio_image A' src={A} alt='A' />
				<img className='mazzilio_image Z' src={Z} alt='Z' />
			</div>
			<div className='mazzilio-container2 float'>
				<img className='mazzilio_image Z1' src={Z1} alt='Z1' />
				<img className='mazzilio_image I' src={I} alt='I' />
				<img className='mazzilio_image L' src={L} alt='L' />
				<img className='mazzilio_image I1' src={I} alt='I' />
				<img className='mazzilio_image O' src={O} alt='O' />
			</div>
			<div className='flower-container2'>
				<img className='flower rotate' src={Flower} alt='flower' />
			</div>
		</div>
	);
};

export default MazzilioLogo;
