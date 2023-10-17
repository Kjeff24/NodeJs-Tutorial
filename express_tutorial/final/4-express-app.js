const express = require('express')
const path = require('path')

const app = express()

// get static file (style.css and main.js)
app.use(express.static('./public'))

app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname, './navbar-toggle/index.html'))
})

app.all('*', (req,res)=>{
	res.status(404).send('cannot be found')
})

app.listen(5000, () =>{
	console.log('listening on port 5000')
})