import React, { useState } from 'react';

import {FaTimes} from 'react-icons/fa'
import Haircut1 from '../img/haircut-1.png'
import Haircut2 from '../img/haircut-2.png'
import Haircut3 from '../img/haircut-3.png'
import Haircut4 from '../img/haircut-4.png'
import Haircut5 from '../img/haircut-5.png'

const Gallery = () =>{

	const [ viewFullPhoto, setView ] = useState(false)
	const [ fullPhoto, setPhoto ] = useState(Haircut1)

	return(
		<div className='gallery'>

			<h1 className='gallery__header'>Galerij</h1>

			<div className='gallery__album'>
				<div className='gallery__album--header'>
					Mannen
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-l'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut2)
						)}}
				>
					<img src={Haircut2} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-2'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut5)
						)}}
				>
					<img src={Haircut5} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-3'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut1)
						)}}
				>
					<img src={Haircut1} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-4'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut3)
						)}}
				>
					<img src={Haircut3} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-5'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut4)
						)}}
				>
					<img src={Haircut4} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-6'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut4)
						)}}
				>
					<img src={Haircut4} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-7'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut1)
						)}}
				>
					<img src={Haircut1} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-8'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut2)
						)}}
				>
					<img src={Haircut2} alt='haircut' />
				</div>
			</div>

			<div className='gallery__album'>
				<div className='gallery__album--header'>
					Vrouwen
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-l'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut2)
						)}}
				>
					<img src={Haircut2} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-2'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut5)
						)}}
				>
					<img src={Haircut5} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-3'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut1)
						)}}
				>
					<img src={Haircut1} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-4'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut3)
						)}}
				>
					<img src={Haircut3} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-5'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut4)
						)}}
				>
					<img src={Haircut4} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-6'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut4)
						)}}
				>
					<img src={Haircut4} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-7'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut1)
						)}}
				>
					<img src={Haircut1} alt='haircut' />
				</div>
				<div className='gallery__album--haircut gallery__album--haircut-8'
					onClick={()=>{return(
						setView(true),
						setPhoto(Haircut2)
						)}}
				>
					<img src={Haircut2} alt='haircut' />
				</div>
			</div>

			{viewFullPhoto?
				<div className='gallery__full'>
					<FaTimes className='gallery__full--close'
						onClick={()=>setView(false)}
					/>
					<img src={fullPhoto} alt='haircut' />
				</div>
				:
				null}
		</div>
		)
}

export default Gallery