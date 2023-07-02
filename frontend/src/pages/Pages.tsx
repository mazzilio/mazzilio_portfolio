import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home/Home';

type Props = {};

const Pages = (props: Props) => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path='/' element={<Home />} />
			{/* <Route path="/cuisine/" element={<CuisinePage />} /> */}
		</Routes>
	);
};

export default Pages;
