const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/api/appointment', (req,res)=>{
	console.log(req.body)
	res.status(200).json("Ok")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
	console.log(`App is listening on port ${PORT}`)
})