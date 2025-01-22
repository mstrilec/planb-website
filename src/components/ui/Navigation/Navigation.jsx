import React from 'react'
import { ReactSVG } from 'react-svg'
import arrowDown from '../../../assets/arrow-down.svg'
import arrowUp from '../../../assets/arrow-up.svg'
import './Navigation.scss'

export const Navigation = () => {
	return (
		<div className='navigation'>
			<ReactSVG
				className='navigation__icon'
				style={{ marginTop: '10px' }}
				src={arrowUp}
			/>

			<ReactSVG
				className='navigation__icon'
				style={{ marginBottom: '10px' }}
				src={arrowDown}
			/>
		</div>
	)
}
