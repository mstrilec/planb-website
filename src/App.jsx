import { Route, Routes } from 'react-router'
import './App.scss'
import { Header } from './components/layout/Header/Header'
import { Main } from './components/layout/Main/Main'
import { Navigation } from './components/ui/Navigation/Navigation'
import { SocialMedia } from './components/ui/SocialMedia/SocialMedia'
import { CapsuleBlock } from './components/layout/CapsuleBlock/CapsuleBlock'
import { BenefitsBlock } from './components/layout/BenefitsBlock/BenefitsBlock'

function App() {
	return (
		<>
			<Header />
      <Navigation />
      <SocialMedia />
			<Routes>
				{/* <Route path='/' element={<Main />} /> */}
				{/* <Route path='/' element={<BenefitsBlock />} /> */}
				{/* <Route path='/' element={<CapsuleBlock />} /> */}

				<Route path='/ecosystem' element={<div>Ecosystem</div>} />
			</Routes>
		</>
	)
}

export default App
