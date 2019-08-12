const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/api/appointment', (req,res)=>{
	console.log(req.body)
	res.status(200).json("Ok")
})

if(process.env.NODE_ENV==="production"){

	app.use(express.static("client/build"))
	const path = require('path')

	app.get('*', (req,res)=>{		
		res.sendFile(path.resolve(__dirname,"client","build","index.html"))
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
	console.log(`App is listening on port ${PORT}`)
})