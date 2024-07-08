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

router.get('/:id/weekdetails',habitController.habitWeeks);
router.post('/:id/weekdetails/:weekno',habitController.habitWeekdata);
// EDIT - Show form to edit habit
router.get('/:id/edit',habitController.editHabitForm);

// UPDATE - Update habit in the DB
router.put('/:id', habitController.update);

// DELETE - Remove habit from the DB
router.delete('/:id',habitController.delete);

module.exports = router;
