import MazzilioLogo from '@/components/loading-state/mazzilio-logo/mazzilio-logo';
import './Home.css';

type Props = {};

const Home = (props: Props) => {
	return (
		<div>
			<div className='home-container'>
				<div className='hero-container'>
					<p>Hey! I'm</p>

					<p>
						I’m a software engineer specializing in building (and
						occasionally designing) exceptional digital experiences.{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
