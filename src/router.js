var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/users', controller.getUsers)
router.post('/users', controller.postUsers)
router.post('/workouts', controller.postWorkout)

module.exports = router;
