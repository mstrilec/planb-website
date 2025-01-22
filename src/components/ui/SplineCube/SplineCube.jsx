import Spline from '@splinetool/react-spline'
import React from 'react'
import './SplineCube.scss'

export const SplineCube = () => {
	return (
		<div className='spline-cube-wrapper'>
			<Spline
				className='spline-cube'
				scene='https://prod.spline.design/Oz8n-SjZNJdpPGNu/scene.splinecode'
			/>
		</div>
	)
}
