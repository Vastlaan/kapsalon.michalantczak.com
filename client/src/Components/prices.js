import React from 'react';

const Prices = () =>{

	return(
		<section className='prices'>

			<header className='prices__header'>
				Prijzen
			</header>

			<div className='prices__section'>
				<h1 className='prices__section--header'>Heren</h1>
				<ul className='prices__section--list'>
					<li className='prices__section--list-item'>Wassen knippen drogen, incl. verzorging <span>€ 23.50</span></li>
					<li className='prices__section--list-item'>Scheren <span>€ 12.50</span></li>
					<li className='prices__section--list-item'>Baard trimmen<span>€ 10.00</span></li>
					<li className='prices__section--list-item'>Kinderen knippen t/m 12 jaar<span>€ 14.50</span></li>
				</ul>
			</div>

			<div className='prices__section'>
				<h1 className='prices__section--header'>Dames</h1>
				<ul className='prices__section--list'>
					<li className='prices__section--list-item'>Wassen knippen droog blowen, incl. verzorging<span>€ 29.50</span></li>
					<li className='prices__section--list-item'>Wassen knippen model föhnen, incl. verzorging<span>€ 35.00</span></li>
					<li className='prices__section--list-item'>Wassen knippen watergolven<span>€ 35.00</span></li>
					<li className='prices__section--list-item'>Wassen knippen watergolven + opsteken<span>€ 41.00</span></li>
					<li className='prices__section--list-item'>Wassen watergolven<span>€ 28.00</span></li>
					<li className='prices__section--list-item'>Wassen model föhnen<span>€ 28.00</span></li>
					<li className='prices__section--list-item'>Créme behandeling onder de kap<span>€ 10.50</span></li>
					<li className='prices__section--list-item'>Olaplex Treatment behandeling<span>€ 27.50</span></li>
				</ul>
			</div>

			<div className='prices__section'>
				<h1 className='prices__section--header'>Kleuring</h1>
				<ul className='prices__section--list'>
					<li className='prices__section--list-item'>Topchic verf kort haar<span>vanaf € 37.50</span></li>
					<li className='prices__section--list-item'>Beauty colour factory Haarkleur machine<span>N.V.T.</span></li>
					<li className='prices__section--list-item'>Kleurspoeling colorance<span>vanaf € 30.00</span></li>
					<li className='prices__section--list-item'>Coupe soleil kort haar<span>vanaf € 39.00</span></li>
					<li className='prices__section--list-item'>Blonderen kort haar<span>vanaf € 39.00</span></li>
					<li className='prices__section--list-item'>High light dunne plukjes op folie<span>vanaf € 46.00</span></li>
				</ul>
			</div>

			<div className='prices__section'>
				<h1 className='prices__section--header'>Permanent</h1>
				<ul className='prices__section--list'>
					<li className='prices__section--list-item'>Alkalisch<span>vanaf € 68.00</span></li>
					<li className='prices__section--list-item'>Alkalisch All-in<span>€ 68.00</span></li>
					<li className='prices__section--list-item'>Animatic All-in Goldwell<span>€ 74.00</span></li>
					<li className='prices__section--list-item'>Goldwell<span>€ 76.00</span></li>
				</ul>
			</div>

		</section>
		)
}

export default Prices