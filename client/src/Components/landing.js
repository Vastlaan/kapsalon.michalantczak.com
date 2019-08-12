import React from 'react';
import Salon from '../img/salon.png';
import { FaPhone, FaEnvelope, FaStar, FaStarHalfAlt, FaQuoteRight} from 'react-icons/fa';

const Landing = () =>{

	return(
		<main className="landing">

			<section className="landing__header">
				<h1 className="landing__header--name">Barber</h1>
				<h3 className="landing__header--sub">De beste kapper in jouw buurt</h3>
			</section>

			<section className="landing__photo">
				<img className="landing__photo--img" src={Salon} alt="salon"/>
			</section>

			<section className="landing__buttons">
				<button className="landing__buttons--btn" onClick={()=>window.location.href='/afspraak'}>Maak afspraak</button>
				<button className="landing__buttons--btn" onClick={()=>window.location.href='/contact'}>Contact ons</button>
			</section>

			<section className="landing__address">
				<p className="landing__address--name">Barber Kapsalon</p>
				<p className="landing__address--street">Oostervenne 397</p>
				<p className="landing__address--city">1444 XN Purmerend</p>
				<a className="landing__address--tel" href="tel:0682307051"> <FaPhone className="landing__address--tel-icon" /> 06 82 30 70 51</a>
				<a className="landing__address--email" href="mailto:ml.antczak@gmail.com"> <FaEnvelope className="landing__address--email-icon" />Stuur ons een email</a>
			</section>

			<section className='landing__open'>

				<h1 className='landing__open--header'>Openingstijden</h1>
				<ul className='landing__open--list'>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Maandag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Dinsdag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Woensdag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Donderdag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Vrijdag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Zaterdag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>
					<li className='landing__open--list-item'>
						<span className='landing__open--list-item-day'>Zondag</span>
						<span className='landing__open--list-item-hour'>09:00 - 18:00</span>
					</li>		
				</ul>

			</section>

			<section className='landing__reviews'>

				<h1 className='landing__reviews--header'>Klantwaardering</h1>
				<div className='landing__reviews--points'>
					<div className='landing__reviews--points-amount'>
						<p>8.6</p>
					</div>
					<div className='landing__reviews--points-stars'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
					</div>
				</div>
				<div className='landing__reviews--opinion'>
					<FaQuoteRight className='landing__reviews--opinion-quote landing__reviews--opinion-quote-1' />
					<p className='landing__reviews--opinion-text'>
						Heel professioneel en klantvriendelijk. Tijdens het wachten een lekker kopje koffie en een lekker muziekje.
					</p>
					<FaQuoteRight className='landing__reviews--opinion-quote landing__reviews--opinion-quote-2' />
				</div>
				<a className='landing__reviews--more' href="/">
					Lees meer reviews
				</a>
			</section>

			<section className='landing__story'>
				<h3 className='landing__story--header'>Perfect Kapsel. Professionele Kappers.</h3>
				<p className='landing__story--about'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p className='landing__story--about'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</section>
		</main>
		)
}

export default Landing