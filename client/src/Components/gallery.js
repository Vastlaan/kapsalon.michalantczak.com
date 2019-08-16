import React, { useState } from 'react';

import {FaTimes} from 'react-icons/fa'
import Haircut11 from '../img/haircut-1_1.png'
import Haircut12 from '../img/haircut-1_2.png'
import Haircut13 from '../img/haircut-1_3.png'
import Haircut14 from '../img/haircut-1_4.png'
import Haircut15 from '../img/haircut-1_5.png'
import Haircut16 from '../img/haircut-1_6.png'
import Haircut21 from '../img/haircut-2_1.png'
import Haircut22 from '../img/haircut-2_2.png'
import Haircut23 from '../img/haircut-2_3.png'
import Haircut24 from '../img/haircut-2_4.png'
import Haircut25 from '../img/haircut-2_5.png'
import Haircut26 from '../img/haircut-2_6.png'

const Gallery = () =>{

	const [ viewFullPhoto, setView ] = useState(false)
	const [ fullPhoto, setPhoto ] = useState(Haircut11)
	const [menMainPhoto, setMenMainPhoto] = useState(Haircut11)
	const [womenMainPhoto, setWomenMainPhoto] = useState(Haircut21)

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
							src={Haircut11} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut11)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut12} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut12)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut13} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut13)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut14} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut14)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut15} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut15)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut16} 
							alt='haircut' 
							onClick={()=>setMenMainPhoto(Haircut16)}
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
							src={Haircut21} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut21)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut22} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut22)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut23} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut23)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut24} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut24)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut25} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut25)}
						/>
					</div>
					<div className='gallery__album--collection-photo'>
						<img 
							src={Haircut26} 
							alt='haircut' 
							onClick={()=>setWomenMainPhoto(Haircut26)}
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