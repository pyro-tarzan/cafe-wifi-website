import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Home from "./../pages/Home.jsx"
import CreateRestaurant from '../pages/CreateRestaurant.jsx';
import EditPage from '../pages/EditPage.jsx';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/createrestaurant' element={<CreateRestaurant />} />
				<Route path='/edit-restaurant/:id' element={<EditPage />}/>
			</Routes>
		</Router>
	)
}

export default App;
