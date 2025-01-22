import React from 'react'
import { Button } from '../../ui/Button/Button'
import './CapsuleBlock.scss'
import { SplineCapsule } from '../../ui/SplineCapsule/SplineCapsule'

export const CapsuleBlock = () => {
	return (
		<section className='capsule-block container'>
			<div className='capsule-block__content'>
				<h2 className='capsule-block__title'>Features Overview</h2>
				<p className='capsule-block__description'>
					Key Aspects include cross-chain compatibility, efficient growth, fast
					processing, and strong protection
				</p>
				<div className='capsule-block__btn'>
					<Button title={'Start Exploring'} />
				</div>
			</div>
			<div>
				<SplineCapsule />
			</div>
		</section>
	)
}
