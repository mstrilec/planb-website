import React from 'react'
import './Button.scss'

export const Button = ({ title, width, height, type, styles, className }) => {
	return (
		<button
			className={`btn ${className} ${
				type === 'primary' ? 'btn--primary' : 'btn--secondary'
			}`}
			style={{
				...styles,
				width: width || '100%',
				height: height || '100%',
			}}
		>
			{title}
		</button>
	)
}
