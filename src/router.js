var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.post('/login', controller.login)
router.post('/signup', controller.signup)
router.post('/workouts', controller.postWorkout)
router.post('/save_workout', controller.saveWorkout)

module.exports = router;
