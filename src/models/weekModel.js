const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
    weekNumber : String,
    DayforHabit :[{
          habitname : {type : mongoose.Schema.Types.ObjectId , ref : "Habit"} ,
          Weekdays :[]

    }]
});

module.exports = mongoose.model('Week', weekSchema);
