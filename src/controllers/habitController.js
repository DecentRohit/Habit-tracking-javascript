const Habit = require("../models/HabitModel")

module.exports.getHabits = async (req, res) => {
    const habits = await Habit.find({});
    res.render('HabitView', { habits });

}
module.exports.showNewHabitForm = async (req, res) => {
    res.render('newHabit');

}
module.exports.addnewHabit = async (req, res) => {
    console.log(req.params, req.query)
    const newHabit = req.body.habit;
    await Habit.create(newHabit);
    res.redirect('/habits');

}
module.exports.habitWeeks = async (req, res) => {
    res.locals.weeknumber = req.query.week
    const habit = await Habit.findById(req.params.id)

    res.render('showHabit', { habit });
}
module.exports.habitWeekdata = async (req, res) => {
    try {
        // console.log("body:", req.body);
        const weekNumber = req.params.weekno;
        // console.log(req.params.id);

        let selectedDays = req.body;
        const yesDays = {};

        for (const [day, value] of Object.entries(selectedDays)) {
            if (value === 'yes')
                yesDays[day] = day;
            if (value === 'no') {
                yesDays[day] = 'not' + day;
            }if (value === 'none') {
                yesDays[day] = 'none' + day;
            }
        }
        const weekdays = Object.values(yesDays);
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).send("Habit not found");
        }

        const alreadyWeekIndex = habit.completedDates.findIndex(week => week.weekNumber === weekNumber);

        if (alreadyWeekIndex !== -1) {
            habit.completedDates[alreadyWeekIndex] = { weekNumber, weekdays };

        } else {
            habit.completedDates.push({ weekNumber, weekdays });
        }

        await habit.save();
        // console.log(habit);

        res.render('showHabit', { habit });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

module.exports.habitDetails = async (req, res) => {
    const habit = await Habit.findById(req.params.id);
    res.render('showHabit', { habit });

}
module.exports.editHabitForm = async (req, res) => {
    const habit = await Habit.findById(req.params.id);
    res.render('editHabit', { habit });

}
module.exports.update = async (req, res) => {

    const updatedHabit = req.body.habit;
    await Habit.findByIdAndUpdate(req.params.id, updatedHabit);
    res.redirect(`/habits/${req.params.id}`);
}
module.exports.delete = async (req, res) => {
    await Habit.findByIdAndDelete(req.params.id);
    res.redirect('/habits');

}
