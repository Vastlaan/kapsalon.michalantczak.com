import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const Footer = () =>{

	return(
		<footer className='footer'>
			<div className='footer__service'>
				<h3 className='footer__service--header'>KlantenService</h3>
				<ul className='footer__service--list'>
					<li className='footer__service--list-item' onClick={()=>window.location.href='/gallery'}><span>Galerij</span></li>
					<li className='footer__service--list-item' onClick={()=>window.location.href='/contact'}><span>Contact</span></li>
					<li className='footer__service--list-item' onClick={()=>window.location.href='/prijzen'}><span>Prijzen</span></li>
				</ul>
			</div>
			<div className='footer__social'>
				<h3 className='footer__social--header'>Social</h3>
				<ul className='footer__social--list'>
					<li className='footer__social--list-item'><IoLogoFacebook className='footer__social--list-facebook'/><span>&nbsp;&nbsp;Facebook</span></li>
					<li className='footer__social--list-item'><IoLogoInstagram className='footer__social--list-instagram'/><span>&nbsp;Instagram</span></li>
					<li className='footer__social--list-item'><IoLogoTwitter className='footer__social--list-twitter'/><span>&nbsp;&nbsp;&nbsp;&nbsp;Twitter</span></li>
				</ul>
			</div>
			<div className='footer__legal'>
				<h3 className='footer__legal--header'>Legal</h3>
				<ul className='footer__legal--list'>
					<li className='footer__legal--list-item' onClick={()=>window.location.href='/legal#cookies'}><span>Cookies</span></li>
					<li className='footer__legal--list-item' onClick={()=>window.location.href='/legal#privacy'}><span>Privacy policy</span></li>
				</ul>
			</div>
		</footer>
		)
}

export default Footer