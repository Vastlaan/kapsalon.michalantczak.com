import React from 'react';
import {FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () =>{

	return(
		<section className='contact'>

			<header className='contact__header'>
				Contact
			</header>

			<section className="contact__address">
				<p className="contact__address--name">Barber Kapsalon</p>
				<p className="contact__address--street">Oostervenne 397</p>
				<p className="contact__address--city">1444 XN Purmerend</p>
				<a className="landing__address--tel" href="tel:0682307051"> <FaPhone className="landing__address--tel-icon" /> 06 82 30 70 51</a>
				<a className="landing__address--email" href="mailto:ml.antczak@gmail.com"> <FaEnvelope className="landing__address--email-icon" />Stuur ons een email</a>
			</section>

			<section className='contact__map'>
				<div className='contact__map--image'>
					<div className='contact__map--image-header'> 
						<h1>Barber</h1>
						<h3>kapsalon</h3>
					</div>
				</div>
				
				<iframe 
					title="map"
					className='contact__map--frame'
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.450402188831!2d4.963890015350588!3d52.52528464359066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6013a8ab41907%3A0x3728c63ef280b338!2sOostervenne+397%2C+1444+XN+Purmerend!5e0!3m2!1spl!2snl!4v1565273469363!5m2!1spl!2snl" 
					frameBorder="0"  
					allowFullScreen>
				</iframe>
			</section>

		</section>

		)
}

export default Contact