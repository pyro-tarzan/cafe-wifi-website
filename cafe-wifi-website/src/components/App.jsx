import './../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from "./../pages/Home.jsx"

const App = () => {
  return (
    <BrowserRouter>
		<Home />
    </BrowserRouter>
  )
}

export default App;
