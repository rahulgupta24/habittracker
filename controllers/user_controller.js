const User = require('../models/user');
const Habit = require('../models/Habit');
const { viewhabit } = require('./habit_controller');

module.exports.createUser = function (request, response) {
    const username = request.body.username;
    // User.findOne({ username }, function (err, newUser) {
    //     if (!err) {
    //         console.log("User already exists", err);
    //         viewhabit(id)
    //         // return response.status(500).json({ error: "User already exists" });
    //     } else {
    //          User.create({ username }, function (err, newUser) {
    //             if (err) {
    //                 console.log("Error creating a user:", err);
    //                 return response.status(500).json({ error: "Failed to create user" });
    //             } else {
    //                 return response.status(200).json({ message: "User created successfully", user: newUser });
    //             }
    //         });
    //     }
    // });

    const user = User.findOne({ username })
    if (user) {
        const id = user._id;
        Habit.findById(id, function (err, habit) {
            if (err) {
                console.log("error in finding habit");
                return;
            }
            else {
                response.render("habit.ejs", { "habit": habit });
            }
        })
    } else {
        User.create({ username }, function (err, newUser) {
            if (err) {
                console.log("Error creating a user:", err);
                return response.status(500).json({ error: "Failed to create user" });
            } else {
                return response.status(200).json({ message: "User created successfully", user: newUser });
            }
        });
    }
};
