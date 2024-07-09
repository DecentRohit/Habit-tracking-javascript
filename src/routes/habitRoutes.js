const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController')

// INDEX - Show all habits
router.get('/', habitController.getHabits);

// NEW - Show form to create new habit
router.get('/new', habitController.showNewHabitForm);

// CREATE - Add new habit to DB
router.post('/', habitController.addnewHabit);

// SHOW - Show details of a habit
router.get('/:id',habitController.habitDetails);
//To save the habitweek number in res.locals for easy access
router.get('/:id/weekdetails',habitController.habitWeeks);
//To push the habit tracking week data
router.post('/:id/weekdetails/:weekno',habitController.habitWeekdata);

//To delete Selected week inside habit Schedule
router.get('/:id/:weekNumber/deleteweek',habitController.deleteWeek);
// EDIT - Show form to edit habit
router.get('/:id/edit',habitController.editHabitForm);

// UPDATE - Update habit in the DB
router.put('/:id', habitController.update);

// DELETE - Remove habit from the DB
router.delete('/:id',habitController.delete);

module.exports = router;
