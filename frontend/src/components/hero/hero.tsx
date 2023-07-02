import HomeButton from '../buttons/home-button/home-button';
import './hero.css';
import MazLogo from './maz-logo';
import HeroBorder from '@/assets/hero-border.svg';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className='hero-container'>
			<p className='hero-container__CTA'>Hey! I'm</p>
			<div className='maz-logo-holder'>
				<MazLogo />
			</div>
			<p className='hero-container__desc'>
				I’m a software engineer specializing in building (and
				occasionally designing) exceptional digital experiences.
			</p>
			<div className='hero-container__projects'>
				<HomeButton ButtonTitle={'View Projects'} />
			</div>
			<img
				src={HeroBorder}
				alt='border'
				className='hero-container__border'
			/>
		</div>
	);
};

export default Hero;
