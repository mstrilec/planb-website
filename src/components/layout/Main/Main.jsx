import React from 'react'
import './Main.scss'
import { SplineCube } from '../../ui/SplineCube/SplineCube'
import { ReactSVG } from 'react-svg'
import bitcoin from '../../../assets/bitcoin.svg'

export const Main = () => {
	return (
		<main className='main container'>
			<h3 className='main__title'>Build. Transact. Scale.</h3>
			<div className='main__content'>
				<SplineCube />
				{/* <ReactSVG className='main__content-bitcoin' src={bitcoin} /> */}
			</div>
		</main>
	)
}
