require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const path = require('path')
const route = require('./routes/routes')
const download = require('./routes/download')
const anotherroute = require('./routes/anotherroute')
const email = require('./routes/email')


app.use(express.static('public'));
app.use(express.json())

const PORT = 3000 || process.env.PORT
connectDB()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine' , 'ejs')


app.use('/api/v1/files', route)
app.use('/api/v1/page', anotherroute)
app.use('/files/download', download)
app.use('/files/send/email', email)

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}...`)
})


        


// app.listen(PORT, ()=>{
//     console.log('Server is listening to PORT')
// })