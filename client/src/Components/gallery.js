import React, { useState } from 'react';

import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
	const [positionOfPhoto, setPositionOfPhoto] = useState(1)
	const [maxPositions, setMaxPositions] = useState(6)
	const [mousePosition, setMousePosition] = useState(undefined)


	const menPhotoCollection = [Haircut11, Haircut12, Haircut13, Haircut14, Haircut15, Haircut16 ]
	const womenPhotoCollection = [Haircut21, Haircut22, Haircut23, Haircut24, Haircut25, Haircut26 ]

	const previousMainPhoto = (photo) =>{

		if(menPhotoCollection.includes(photo)){
			const i = menPhotoCollection.indexOf(photo)
			const maxIndexNumber = menPhotoCollection.length -1
			if(i===0){
				setPositionOfPhoto(menPhotoCollection.length)
				return setPhoto(menPhotoCollection[maxIndexNumber])
			}else{
				setPositionOfPhoto(i)
				return setPhoto(menPhotoCollection[i-1])
			}
		}else{
			const i = womenPhotoCollection.indexOf(photo)
			const maxIndexNumber = womenPhotoCollection.length -1
			if(i===0){
				setPositionOfPhoto(womenPhotoCollection.length)
				return setPhoto(womenPhotoCollection[maxIndexNumber])
			}else{
				setPositionOfPhoto(i)
				return setPhoto(womenPhotoCollection[i-1])
			}
		}
	}

	const nextMainPhoto = (photo) =>{

		if(menPhotoCollection.includes(photo)){
			const i = menPhotoCollection.indexOf(photo)
			const maxIndexNumber = menPhotoCollection.length -1
			if(i===maxIndexNumber){
				setPositionOfPhoto(1)
				return setPhoto(menPhotoCollection[0])
			}else{
				setPositionOfPhoto(i+2)
				return setPhoto(menPhotoCollection[i+1])
			}
		}else{
			const i = womenPhotoCollection.indexOf(photo)
			const maxIndexNumber = womenPhotoCollection.length -1
			if(i===maxIndexNumber){
				setPositionOfPhoto(1)
				return setPhoto(womenPhotoCollection[0])
			}else{
				setPositionOfPhoto(i+2)
				return setPhoto(womenPhotoCollection[i+1])
			}
		}
	}

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
						onClick={()=>{
						setView(true)
						setPositionOfPhoto(menPhotoCollection.indexOf(menMainPhoto)+1)
						setMaxPositions(menPhotoCollection.length)
						return setPhoto(menMainPhoto)
						}}
					/>
					<p>View Full Screen</p>
				</div>

				<div className='gallery__album--collection'>
					{menPhotoCollection.map((photo,i)=>{
						return(
							<div className='gallery__album--collection-photo'  key={`Men${i}`}>
								<img 
									src={photo} 
									alt='haircut' 
									onClick={()=>setMenMainPhoto(photo)}
								/>
							</div>
							)
					})}
				</div>
			</div>

			<div className='gallery__album'>
				<h1 className='gallery__album--header'>Vrouwen</h1>
				<div className='gallery__album--main'>
					<img 
						src={womenMainPhoto} 
						alt='haircut' 
						className='gallery__album--main-photo'
						onClick={()=>{
						setView(true)
						setPositionOfPhoto(womenPhotoCollection.indexOf(womenMainPhoto)+1)
						setMaxPositions(womenPhotoCollection.length)
						return setPhoto(womenMainPhoto)
						}}
					/>
					<p>View Full Screen</p>
				</div>

				<div className='gallery__album--collection'>
					{womenPhotoCollection.map((photo,i)=>{
						return(
							<div className='gallery__album--collection-photo' key={`Women${i}`}>
								<img 
									src={photo} 
									alt='haircut' 
									onClick={()=>setWomenMainPhoto(photo)}
								/>
							</div>
							)
					})}
				
				</div>
				
			</div>

			{viewFullPhoto?
				<div 
					className='gallery__full' 
					onTouchStart={(event)=>{
						console.log(event.clientX)
						setMousePosition(event.clientX)
					}}
					onTouchEnd={(event)=>{
						if(event.clientX>mousePosition){
							previousMainPhoto(fullPhoto)
						}else if(event.clientX<mousePosition){
							nextMainPhoto(fullPhoto)
						}
					}}
				>

					<div className='gallery__full--count'>
						{positionOfPhoto}/{maxPositions}
					</div>

					<FaTimes className='gallery__full--close'
						onClick={()=>setView(false)}
					/>

					<img src={fullPhoto} alt='haircut' />

					<div className='gallery__full--previous' onClick={()=>previousMainPhoto(fullPhoto)}>
						<FaChevronLeft />
					</div>
					<div className='gallery__full--next' onClick={()=>nextMainPhoto(fullPhoto)}>
						<FaChevronRight />
					</div>
				</div>
				:
				null}
		</div>
		)
}

export default Gallery