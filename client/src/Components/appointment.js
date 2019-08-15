import React from 'react';
// import DatePicker from 'react-datepicker';	//only for time selection
// import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';	//for date selection
import 'react-day-picker/lib/style.css';

class Appointment extends React.Component {

	constructor(props) {
	    super(props);
	    this.handleDayClick = this.handleDayClick.bind(this);
	    this.state = {
	    	date: null,
	    	name:null,
	    	email: null,
	    	phone:null,
	    	time:null,

	    	button: 1,
	    	step: 0,
	      	selectedDay: undefined
	    };
	}

	isDateValid = () =>{
		if(this.state.selectedDay===null ||this.state.selectedDay===undefined ||this.state.selectedDay===""){
			return false
		}
		return true
	}
	isTimeValid = () =>{
		if(this.state.time===null || this.state.time===undefined || this.state.time===""){
			return false
		}
		return true
	}

	isNameValid = () =>{
		const nameFieldValue = document.querySelector('#name').value
		if(nameFieldValue===null || nameFieldValue===undefined || nameFieldValue===""){
			return false
		}
		return true
	}
	isEmailValid = () =>{
		const emailFieldValue = document.querySelector('#email').value
		if(emailFieldValue===null || emailFieldValue===undefined || emailFieldValue===""){
			return false
		}
		return true
	}
	isPhoneValid = () =>{
		const phoneFieldValue = document.querySelector('#phone').value
		if(phoneFieldValue===null || phoneFieldValue===undefined || phoneFieldValue===""){
			return false
		}
		return true
	}

	selectTime = (e) =>{
		document.querySelectorAll('.appointment__data--date-times-each').forEach(element=>{
			element.style.backgroundColor=""
		})
		e.target.style.backgroundColor="#B97C7C"
		this.setState({time:e.target.innerHTML})
	}

	next = () =>{	
		if(this.state.step===0){
			if(this.isDateValid()){
				return this.setState({
					button:2,
					step:1
				})
				
			}else{
				return null
			}
		}else if(this.state.step===1){
			if(this.isTimeValid()){

				return this.setState({
					button:2,
					step:2
				})
			}else{
				return null
			}
		}else if(this.state.step===2){
			if(this.isNameValid() && this.isEmailValid() && this.isPhoneValid()){

				return this.setState({
					button:3,
					step:3
				})
			}else{
				return null
			}
		}
	}
	previous = () =>{
		if(this.state.step===1 ){
			return this.setState({
				button:1,
				step:0
			})
				
		}else if(this.state.step===2 ){
			return this.setState({
				button:2,
				step:1
			})
				
		}else if(this.state.step===3){
			return this.setState({
				name:null,
				email:null,
				phone:null,
				button:2,
				step:2
			})
		}
	}

	handleDayClick(day, modifiers={}) {

		if(modifiers.disabled){	
			return
		}
		this.setState({
			selectedDay: modifiers.selected?undefined:day,
			date: modifiers.selected?this.state.date:day.toLocaleDateString()
		})
	}

	send = () =>{

		const {date, time, name, email, phone} = this.state

		const formData = {
			date,
			time,
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



	render() {
		const times = ["09:00", "09:15", "09:30", "09:45","10:00", "10:15", "10:30", "10:45","11:00", "11:15", "11:30", "11:45","12:00", "12:15", "12:30", "12:45","13:00", "13:15", "13:30", "13:45","14:00", "14:15", "14:30", "14:45","15:00", "15:15", "15:30", "15:45","16:00", "16:15", "16:30", "16:45","17:00", "17:15", "17:30", "17:45"]
	 	const { date, time, name, email, phone, step, button } = this.state
	return(
		
		<div className='appointment'>
			<h1 className='appointment__header'>Afspraak maken</h1>
			<div className='appointment__info'>
				<h3 className='appointment__info--header'>U kunt afspraak maken in 4 makkelijke stappen</h3>
				<ul className='appointment__info--steps'>
					<li className='appointment__info--steps-each'>1. Kies een datum</li>
					<li className='appointment__info--steps-each'>2. Kies een tijd</li>
					<li className='appointment__info--steps-each'>3. Geef uw naam, email adres en telefoon nummer door</li>
					<li className='appointment__info--steps-each'>4. Bevestig uw afspraak</li>
				</ul>
				<p className='appointment__info--footer'>U ontvangt een bevestiging op door u gegeven email.</p>
			</div>
			<div className='appointment__data'>
				{
					step===0?
						(<div className='appointment__data--date' key="date">
							<p>Stap <span>1</span></p>
							<label>Kies een datum:</label>
							<div className='appointment__data--date-calendar'>
						        <DayPicker
						        	className='appointment__data--date-calendar-picker'
						        	disabledDays={{ 
						        		daysOfWeek: [0],
						        		before: new Date()
						        	}}
						          	onDayClick={this.handleDayClick}
						          	selectedDays={this.state.selectedDay}
						        />
						    </div>
						    
						</div>)
					:step===1?
					(
						<div className='appointment__data--date'>
							<p>Stap <span>2</span></p>
							<label>Kies een tijd:</label>
							<div className='appointment__data--date-times'>
							{times.map((each,i)=>{
								return(
									<div 
										className='appointment__data--date-times-each' 
										onClick={(event)=>this.selectTime(event)}
										key={`time_${i}`}
									>
										{each}
									</div>
									)
							})
								
							}
								
							</div>
						</div>
					)
					:step===2?
						(<div className='appointment__data--data' key="credentials">
							<p>Stap <span>3</span></p>
							<label>Uw naam:</label>
							<input type='text' id="name" name='name' onChange={(event)=>this.setState({name:event.target.value})} />
							<label>Uw email:</label>
							<input type='email' id="email" name='email' onChange={(event)=>this.setState({email:event.target.value})} />
							<label>Uw telefoonnummer:</label>
							<input type='tel' id="phone" name='phone' onChange={(event)=>this.setState({phone:event.target.value})} />
						</div>)
				
					:	
						(<div className='appointment__data--confirmation'>
							<label className='appointment__data--confirmation-header'>Bevestiging</label>
							<h3 className='appointment__data--confirmation-each'><span>Date:</span> {date}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Tijd:</span> {time}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Naam:</span> {name}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Email:</span> {email}</h3>
							<h3 className='appointment__data--confirmation-each'><span>Telefoon:</span> {phone}</h3>
							
						</div>)	
				}
				{button===1?
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="next" key="next" onClick={()=>this.next()}>Volgende</button>
					</div>
					:
					button===2?
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="back" key="back" onClick={()=>this.previous()}>Terug</button>
						<button className='appointment__data--btn' id="next" key="next" onClick={()=>this.next()}>Volgende</button>
					</div>
					:
					<div className='appointment__data--buttons'>
						<button className='appointment__data--btn' id="back" key="back" onClick={()=>this.previous()}>Terug</button>
						<button className='appointment__data--btn' key="confirm" onClick={()=>this.send()}>Bevestig</button>
					</div>
					
				}
				
				
			</div>
		</div>
		)
	}
}

export default Appointment