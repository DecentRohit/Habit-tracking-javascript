const mongoose = require('mongoose')

const baseUrl = 127.0.0.1:27017 || '0.0.0.0:27017';

// const Url = 'mongodb://127.0.0.1:27017/habitTracker'

 const connectUsingMongoose = async ()=>{
    try{await mongoose.connect(`mongodb://${baseUrl}/habitTracker` , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       })
     console.log("connected using mongoose")
 }catch(err){
        console.log(err)
        console.log("failed to connect using mongoose")
      
 }
 }
 module.exports = connectUsingMongoose;
