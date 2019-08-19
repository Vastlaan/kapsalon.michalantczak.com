const Pool = require('pg').Pool
const keys = require('./config/keys')

const pool = new Pool({
	user:keys.DATABASE_USER,
	host:keys.DATABASE_HOST,
	database: keys.DATABASE_NAME,
	password: keys.DATABASE_SECRET,
	port:keys.DATABASE_PORT
})

const getAppointments = (req,res) =>{
	pool.query('SELECT date, time FROM appointments ORDER BY date ASC;', (err,results)=>{
		if(err){
			throw err
		}
		if(results.rows){
			return res.status(200).json(results.rows)
		}else{
			return res.status(200).json([])
		}
		
	})
} 

const createAppointment = (req,res)=>{

	const {date, time, name, email, phone } = req.body

	pool.query('INSERT INTO appointments (date, time, name, email, phone) VALUES ($1, $2, $3, $4, $5)', [date, time, name, email, phone], (err, result)=>{
		if(err){
			throw err
		}
		return res.status(200).json({date, time, name, email, phone})
	})
}

module.exports = {
	getAppointments,
	createAppointment
}