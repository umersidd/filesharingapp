
require('dotenv').config()
const mongoose = require('mongoose')

function connectDB(){
    //console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    //useFindAndModify: true,
    useUnifiedTopology: true,
    //userCreateIndex:true
  });

//   const connection = mongoose.connection;

//   connection.once('open', ()=>{
//       console.log('Connected to database')
//   }).catch(err => {
//       console.log('error')
//   })
}

module.exports = connectDB