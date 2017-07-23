var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.post('/login', controller.login)
router.post('/signup', controller.signup)
router.post('/workouts', controller.addWorkout)
router.post('/exercises', controller.saveExercise)

module.exports = router;
