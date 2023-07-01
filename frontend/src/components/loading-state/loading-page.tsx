import './loading-page.css';
import MazzilioLogo from './mazzilio-logo/mazzilio-logo';

type Props = {};

const LoadingPage = (props: Props) => {
	return (
		<div className='loading-state'>
			<div className='loading-state__logo-container'>
				<MazzilioLogo />
			</div>
		</div>
	);
};

export default LoadingPage;
