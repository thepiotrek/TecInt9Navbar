import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

// Importing Navbar component:
import Navbar from "./components/Navbar"

// Importing pages from the Navbar menu:
import Home from "./pages/Home"
import Excursions from './pages/Excursions'
import Transport from './pages/FindTransport'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import ParticipantList from './pages/ParticipantList'
import DutyList from './pages/DutyList'
import ShoppingList from './pages/ShoppingList'

export default function App() {

	return (
		<div>
			<Navbar />
			<section className="main-window">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/excursions" element={<Excursions />} />
						<Route path="/transport" element={<Transport />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/participantList" element={<ParticipantList />} />
						<Route path="/dutyList" element={<DutyList />} />
						<Route path="/shoppingList" element={<ShoppingList />} />
					</Routes>
				</BrowserRouter>
			</section>
		</div>
	)
}