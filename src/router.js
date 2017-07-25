var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.post('/login', controller.loginUser)
router.post('/signup', controller.signup)
router.post('/workouts', controller.addWorkout)
router.get('/workouts', controller.getAllWorkouts)
router.post('/exercises', controller.saveExercise)
router.get('/exercises', controller.getAllExercises)
router.post('/test', controller.createUser)
router.get('/test', controller.getAllExercisesTest)
router.post('/testexercises', controller.saveExercises)

module.exports = router;
