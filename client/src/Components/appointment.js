import React, { useState } from 'react';

const Appointment = () =>{

	const [date, setDate] = useState(null)
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [phone, setPhone] = useState(null)

	const [button, setButton] = useState(1)
	const [step, setStep] = useState(1)

	const isDateValid = () =>{
		const dateFieldValue = document.querySelector('#date').value
		if(dateFieldValue==="null" || dateFieldValue===undefined || dateFieldValue===""){
			return false
		}
		return true
	}

	const isNameValid = () =>{
		const nameFieldValue = document.querySelector('#name').value
		if(nameFieldValue==="null" || nameFieldValue===undefined || nameFieldValue===""){
			return false
		}
		return true
	}
	const isEmailValid = () =>{
		const emailFieldValue = document.querySelector('#email').value
		if(emailFieldValue==="null" || emailFieldValue===undefined || emailFieldValue===""){
			return false
		}
		return true
	}
	const isPhoneValid = () =>{
		const phoneFieldValue = document.querySelector('#phone').value
		if(phoneFieldValue==="null" || phoneFieldValue===undefined || phoneFieldValue===""){
			return false
		}
		return true
	}

	const next = () =>{	
		if(step===1){
			if(isDateValid()){
				setButton(2)
				return setStep(2)
			}else{
				return null
			}
		}else if(step===2){
			if(isNameValid() && isEmailValid() && isPhoneValid()){
				setButton(3)
				return setStep(3)
			}else{
				return null
			}
		}
	}
	const previous = () =>{	
		if(step===2 ){
			setButton(1)
			return setStep(1)	
		}else if(step===3){
			setName(null)
			setEmail(null)
			setPhone(null)
			setButton(2)
			return setStep(2)
		}
	}

	const send =() =>{
		const formData = {
			date,
			name,
			email,
			phone
		}

		fetch('/api/appointment', {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify(formData)
		})
			.then(req=>req.json())
			.then(data=>console.log(data))
	}
	return(
		<div className='appointment'>
			<h1 className='appointment__header'>Afspraak maken</h1>
			<div className='appointment__info'>
				<h3 className='appointment__info--header'>U kunt afspraak maken in 3 makkelijke stappen</h3>
				<ul className='appointment__info--steps'>
					<li className='appointment__info--steps-each'>1. Kies een datum</li>
					<li className='appointment__info--steps-each'>2. Geef uw naam, email adres en telefoon nummer door</li>
					<li className='appointment__info--steps-each'>3. Bevestig uw afspraak</li>
				</ul>
				<p className='appointment__info--footer'>U ontvangt een bevestiging op door u gegeven email.</p>
			</div>
			<div className='appointment__data'>
				{
					step===1?
						(<div className='appointment__data--date' key="date">
							<p>Stap <span>{step}</span></p>
							<label>Kies een datum:</label>
							<input type='date' id="date" name='date' onChange={(event)=>setDate(event.target.value)} />
						</div>)
					:step===2?
						(<div className='appointment__data--data' key="credentials">
							<p>Stap <span>2</span></p>
							<label>Uw naam:</label>
							<input type='text' id="name" name='name' onChange={(event)=>setName(event.target.value)} />
							<label>Uw email:</label>
							<input type='email' id="email" name='email' onChange={(event)=>setEmail(event.target.value)} />
							<label>Uw telefoonnummer:</label>
							<input type='tel' id="phone" name='phone' onChange={(event)=>setPhone(event.target.value)} />
						</div>)
				
					:	
						(<div className='appointment__data--confirmation'>
							<label className='appointment__data--confirmation-header'>Bevestiging</label>
							<h3 className='appointment__data--confirmation-each'><span>Date:</span> {date}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Naam:</span> {name}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Email:</span> {email}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Telefoon:</span> {phone}</h3>
							
						</div>)	
				}
				{button===1?
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="next" key="next" onClick={()=>next()}>Volgende</button>
					</div>
					:
					button===2?
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="back" key="back" onClick={()=>previous()}>Terug</button>
						<button className='appointment__data--btn' id="next" key="next" onClick={()=>next()}>Volgende</button>
					</div>
					:
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="back" key="back" onClick={()=>previous()}>Terug</button>
						<button className='appointment__data--btn' key="confirm" onClick={()=>send()}>Bevestig</button>
					</div>
					
				}
				
				
			</div>
		</div>
		)
}

export default Appointment