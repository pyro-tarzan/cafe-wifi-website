import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Home from "./../pages/Home.jsx"
import CreateRestaurant from '../pages/CreateRestaurant.jsx';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/createrestaurant' element={<CreateRestaurant />} />
			</Routes>
		</Router>
	)
}

export default App;
