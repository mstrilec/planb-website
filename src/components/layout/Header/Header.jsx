import React, { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'
import chevronDown from '../../../assets/chevron-down.svg'
import logo from '../../../assets/logo.svg'
import { Button } from '../../ui/Button/Button'
import { MENU } from './header.data'
import './Header.scss'

export const Header = () => {
	const [openMenuIndex, setOpenMenuIndex] = useState(null)
	const dropdownRefs = useRef([]);

	const handleMenuClick = index => {
		setOpenMenuIndex(openMenuIndex === index ? null : index)
	}

	const handleOutsideClick = (event) => {
    if (
      dropdownRefs.current.every(
        (dropdown) => dropdown && !dropdown.contains(event.target)
      )
    ) {
      setOpenMenuIndex(null);
    }
  };

	useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

	return (
		<div className='header-wrapper'>
			<header className='header container'>
				<nav className='header__nav'>
					<ul className='header__menu'>
						{MENU.map((item, index) => (
							<li
								key={index}
								className={`header__menu-item ${
									openMenuIndex === index ? 'header__menu-item--active' : ''
								}`}
								ref={(el) => (dropdownRefs.current[index] = el)}
								onClick={(e) => {
                  e.stopPropagation();
                  handleMenuClick(index);
                }}
							>
								{item.name}
								{item.subMenu && (
									<span className='header__menu-item-icon'>
										<ReactSVG src={chevronDown} />
									</span>
								)}
								{item.subMenu && openMenuIndex === index && (
									<ul className='header__submenu'>
										{item.subMenu.map((subItem, subIndex) => (
											<li key={subIndex} className='header__submenu-item'>
												<a
													href={subItem.link}
													className='header__submenu-item-link'
												>
													{subItem.name}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</nav>
				<ReactSVG src={logo} className='header__logo' />
				<div className='header__actions'>
					<Button type={'primary'} width={'202px'} title='Start Exploring' />
				</div>
			</header>
		</div>
	)
}
