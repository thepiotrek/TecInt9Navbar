import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchExcursions } from './api';
import './App.css'

// Importing Navbar component:
import Navbar from "./components/Navbar"

// Importing pages for the navigation bar:
import Home from "./pages/Home"

import ExcursionsAdmin from './pages/ExcursionsAdmin'
import ParticipantList from './pages/ParticipantList'
import DutyList from './pages/DutyList'
import ShoppingList from './pages/ShoppingList'

import Excursions from './pages/Excursions'
import Transport from './pages/FindTransport'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

// Other pages:
import CreateExcursion from './pages/CreateExcursion'
import AfterSignUp from './pages/AfterSignUp'

export default function App() {

	const [user, setUser] = useState(null)

	const [excursions, setExcursions] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const result = await fetchExcursions();
			setExcursions(result)
		}
		fetchData();
	}, []);

	if (!excursions) {
		return <>Loading...</>
	}

	return (
		<>
			<BrowserRouter>
				<Navbar user={user} noEx={!(excursions.length === 0)} />
				<section className="main">
					<Routes>
						<Route path="/" element={<Home setUser={setUser} />} />
						<Route path="/home" element={<Home setUser={setUser} />} />

						<Route path="/admin" element={<ExcursionsAdmin setUser={setUser} excursions={excursions} />} />
						<Route path="/participantList" element={<ParticipantList setUser={setUser} excursions={excursions} />} />
						<Route path="/dutyList" element={<DutyList setUser={setUser} excursions={excursions} />} />
						<Route path="/shoppingList" element={<ShoppingList setUser={setUser} excursions={excursions} />} />

						<Route path="/excursions" element={<Excursions setUser={setUser} excursions={excursions} />} />
						<Route path="/transport" element={<Transport setUser={setUser} />} />
						<Route path="/contact" element={<Contact setUser={setUser} />} />
						<Route path="/signup" element={<Signup setUser={setUser} excursions={excursions} />} />

						<Route path="/createExcursion" element={<CreateExcursion setUser={setUser} />} />
						<Route path="/afterSignUp" element={<AfterSignUp />} />
					</Routes>
				</section>
			</BrowserRouter>
		</>
	)
}