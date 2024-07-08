const mongoose = require('mongoose')

const Url = 'mongodb://localhost:27017/habitTracker'

 const connectUsingMongoose = async ()=>{
    try{await  mongoose.connect(Url)
     console.log("connected using mongoose")
 }catch(err){
        console.log(err)
        console.log("failed to connect using mongoose")
      
 }
 }
 module.exports = connectUsingMongoose;
