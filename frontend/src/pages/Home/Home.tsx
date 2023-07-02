import MazzilioLogo from '@/components/loading-state/mazzilio-logo/mazzilio-logo';
import './Home.css';
import Hero from '@/components/hero/hero';

type Props = {};

const Home = (props: Props) => {
	return (
		<div>
			<div className='home-container'>
				<div className='hero-container'>
					<Hero />
				</div>
			</div>
		</div>
	);
};

export default Home;
