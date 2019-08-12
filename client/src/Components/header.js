import React from 'react';
import { FaImages } from 'react-icons/fa';


const Header = () =>{

	return(
		<header className='header'>
			<div className='header__left'>
				<p className='header__left--link' onClick={()=>window.location.href='/afspraak'}>Afspraak</p>
				<p className='header__left--link' onClick={()=>window.location.href="/prijzen"}>Prijzen</p>
				<p className='header__left--link' onClick={()=>window.location.href="/contact"}>Contact</p>
			</div>
			<div className='header__center'>
				<div className='header__center--logo' onClick={()=>window.location.href="/"}>
					<h1 className='header__center--logo-name'>Barber</h1>
					<h3 className='header__center--logo-sub'>Kapsalon</h3>
				</div>
				
			</div>
			<div className='header__right'>
				<div className='header__right--user' onClick={()=>window.location.href="/gallery"}>
					<FaImages className="header__right--user-icon" />
					<p className="header__right--user-text">Galerij</p>
				</div>
			</div>
		</header>
		)
}

export default Header