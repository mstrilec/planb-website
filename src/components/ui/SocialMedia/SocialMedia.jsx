import React from 'react'
import { ReactSVG } from 'react-svg'
import { MEDIA } from './socialMedia.data'
import './SocialMedia.scss'

export const SocialMedia = ({ styles }) => {
	return (
		<div className='social-media' style={styles}>
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
