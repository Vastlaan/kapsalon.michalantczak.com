import React, { useState, useEffect } from 'react';

import {FaTimes} from 'react-icons/fa'
import Haircut1 from '../img/haircut-1.png'
import Haircut2 from '../img/haircut-2.png'
import Haircut3 from '../img/haircut-3.png'
import Haircut4 from '../img/haircut-4.png'
import Haircut5 from '../img/haircut-5.png'



const Galeria = () =>{

	useEffect(()=>{
		const header = document.querySelector('.header')
		const body = document.querySelector('body')
		const footer = document.querySelector('.footer')

		header.style.backgroundColor="#D0BBAF"
		body.style.backgroundColor="#D0BBAF"
		footer.style.backgroundColor="#D0BBAF"
	}
	)
	return(
		<div className='galeria'>
			<div className='galeria__row'>
				<div className='galeria__photo galeria__photo--1'>
					<img src={Haircut2} alt='haircut' />
					<h1>Mannen kapsel kort</h1>
				</div>
				<div className='galeria__photo galeria__photo--2'>
					<img src={Haircut4} alt='haircut' />
					<h1>Dames kapsel</h1>
				</div>
				<div className='galeria__photo galeria__photo--3'>
					<img src={Haircut5} alt='haircut' />
					<h1>Dames kapsel kort</h1>
				</div>
			</div>
		</div>
		)

}

export default Galeria