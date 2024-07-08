const mongoose = require('mongoose')

const Url = 'mongodb://127.0.0.1:27017/habitTracker'

 const connectUsingMongoose = async ()=>{
    try{await  mongoose.connect(Url)
     console.log("connected using mongoose")
 }catch(err){
        console.log(err)
        console.log("failed to connect using mongoose")
      
 }
 }
 module.exports = connectUsingMongoose;