const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  frequency: {
    type: String,
    required: true,
  },
  completedDates: [{
    weekNumber: {
      type: String,
      required: true,
      trim: true
    },
    weekdays: {
      type: [String],
      enum: [
        "Monday", "notMonday", "Tuesday", "notTuesday", "Wednesday", "notWednesday",
        "Thursday", "notThursday", "Friday", "notFriday", "Saturday", "notSaturday",
        "Sunday", "notSunday"
      ],
      validate: {
        validator: function(v) {
          // Ensure no duplicate days
          return v.length === new Set(v).size;
        },
        message: props => `Duplicate days found: ${props.value}`
      }
    }
  }]
});

module.exports = mongoose.model('Habit', habitSchema);
