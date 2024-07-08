const mongoose = require('mongoose')

const baseUrl = "mongodb+srv://testuser:Simple@habit.2ppv3d3.mongodb.net/?retryWrites=true&w=majority&appName=habit"

// const Url = 'mongodb://127.0.0.1:27017/habitTracker'

 const connectUsingMongoose = async ()=>{
    try{await mongoose.connect(baseUrl)
     console.log("connected using mongoose")
 }catch(err){
        console.log(err)
        console.log("failed to connect using mongoose")
      
 }
 }
 module.exports = connectUsingMongoose;
