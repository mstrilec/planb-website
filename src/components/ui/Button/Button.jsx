import React from 'react'
import './Button.scss'

export const Button = ({ title, width, height, type }) => {
	return (
		<button
			className={`btn ${
				type === 'primary' ? 'btn--primary' : 'btn--secondary'
			}`}
			style={{
				width: width || '100%',
				height: height || '100%',
			}}
		>
			{title}
		</button>
	)
}
