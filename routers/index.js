const express = require("express");
const router = express.Router();

const habitController = require("../controllers/habit_controller");
const userController = require("../controllers/user_controller");
// For rendering different pages and controllers
router.post("/add-user", userController.createUser);
router.get("/", habitController.load);
router.post("/add-habit", habitController.add);
router.get("/delete-habit", habitController.delete);
router.get("/view-habit", habitController.viewhabit);
router.get("/find-habit", habitController.fetchhabit);
router.get("/update-db-date", habitController.updateDates);

module.exports = router;