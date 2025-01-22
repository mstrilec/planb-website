import React from 'react'
import { SplineCube } from '../../ui/SplineCube/SplineCube'
import { BenefitsBlock } from '../BenefitsBlock/BenefitsBlock'
import './Main.scss'
import { ReadyBlock } from '../ReadyBlock/ReadyBlock'

export const Main = () => {
	return (
		<main className='main container'>
			<h3 className='main__title'>Build. Transact. Scale.</h3>
			<div className='main__content'>
				<SplineCube />
				{/* <ReactSVG className='main__content-bitcoin' src={bitcoin} /> */}
			</div>
			<BenefitsBlock />
			<ReadyBlock />
		</main>
	)
}
