import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import arrowLeft from '../../../assets/arrow-left.svg'
import arrowRight from '../../../assets/arrow-right.svg'
import { Button } from '../../ui/Button/Button'
import './BenefitsBlock.scss'

const slides = [
	{
		title: 'Bitcoin centric with EVM Composability',
		description:
			'Plan B makes Bitcoin programmable, using BTC as gas, supports EVM, and offers BTC staking via Babylon.',
	},
	{
		title: 'BTCFi & BTC Mining',
		description:
			'Plan B combines EVM as gas, enabling BTC lending, and tokenized yields.',
	},
]

export const BenefitsBlock = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const handlePrev = () => {
		setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	return (
		<section className='benefits-block container'>
			<div className='benefits-block__content'>
				<h2 className='benefits-block__title'>Benefits, that you’ll have</h2>
				<p className='benefits-block__description'>
					Plan B is an EVM-compatible blockchain that uses BTC as gas, supports
					staking, dApps, and fast transactions
				</p>
				<div className='benefits-block__actions'>
					<Button
						width={'64px'}
						height={'64px'}
						title={<ReactSVG src={arrowLeft} />}
					/>
					<Button
						width={'64px'}
						height={'64px'}
						title={<ReactSVG src={arrowRight} />}
					/>
				</div>
			</div>
		</section>
	)
}
