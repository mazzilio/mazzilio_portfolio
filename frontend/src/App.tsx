import './App.css';
import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import LoadingPage from './components/loading-state/loading-page';
import Pages from './pages/Pages';
import Footer from './components/footer/footer';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<>
			<div className='app'>
				{/* {loading ? (
					<LoadingPage />
				) : ( */}
				<div>
					<HashRouter>
						<NavBar />
						<Pages />
						<Footer />
					</HashRouter>
				</div>
				{/* )} */}
			</div>
		</>
	);
}

export default App;
