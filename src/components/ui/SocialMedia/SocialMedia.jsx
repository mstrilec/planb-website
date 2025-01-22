import React from 'react'
import { ReactSVG } from 'react-svg'
import { MEDIA } from './socialMedia.data'
import './SocialMedia.scss'

export const SocialMedia = () => {
	return (
		<div className='social-media'>
			{MEDIA.map((item, index) => (
				<a
					key={index}
					href={item.link}
					className='social-media__link'
					target='_blank'
				>
					<ReactSVG src={item.icon} />
				</a>
			))}
		</div>
	)
}
