import React from 'react'
import { ReactSVG } from 'react-svg'
import bottomLeft from '../../../assets/bot-left.svg'
import bottomRight from '../../../assets/bot-right.svg'
import shield from '../../../assets/shield.svg'
import topLeft from '../../../assets/top-left.svg'
import topRight from '../../../assets/top-right.svg'
import './BenefitsCard.scss'

export const BenefitsCard = ({ slide }) => {
	return (
		<div className='benefits-card'>
			<ReactSVG className='benefits-card-icon' src={shield} />
			<h3 className='benefits-card-title'>
				{slide.name}
			</h3>
			<div className='benefits-card-block'>
				<ReactSVG className='benefits-card-block-icon-tl' src={topLeft} />
				<ReactSVG className='benefits-card-block-icon-tr' src={topRight} />
				<p className='benefits-card-text'>
					{slide.description}
				</p>
				<ReactSVG className='benefits-card-block-icon-br' src={bottomRight} />
				<ReactSVG className='benefits-card-block-icon-bl' src={bottomLeft} />
			</div>
			<h5 className='benefits-card-type'>Security</h5>
		</div>
	)
}
