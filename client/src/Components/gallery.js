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
	const [menMainPhoto, setMenMainPhoto] = useState(Haircut2)
	const [womenMainPhoto, setWomenMainPhoto] = useState(Haircut4)

	return(
		<div className='gallery'>

			<h1 className='gallery__header'>Galerij</h1>

			<div className='gallery__album'>

				<h1 className='gallery__album--header'>Mannen</h1>

				<div className='gallery__album--main'>
					<img 
						src={menMainPhoto} 
						alt='haircut' 
						className='gallery__album--main-photo'
						onClick={()=>{return(
						setView(true),
						setPhoto(menMainPhoto)
						)}}
					/>
				</div>

				<div className='gallery__album--collection'>

					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut2} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut2)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut4} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut4)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut1} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut1)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut3} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut3)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut5} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut5)}
						/>
					</div>
					
				</div>
				
			</div>

			<div className='gallery__album'>
				<h1 className='gallery__album--header'>Vrouwen</h1>
				<div className='gallery__album--main'>
					<img 
						src={womenMainPhoto} 
						alt='haircut' 
						className='gallery__album--main-photo'
						onClick={()=>{return(
						setView(true),
						setPhoto(womenMainPhoto)
						)}}
					/>
				</div>

				<div className='gallery__album--collection'>

					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut2} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut2)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut4} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut4)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut1} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut1)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut3} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut3)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut5} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut5)}
						/>
					</div>
					
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