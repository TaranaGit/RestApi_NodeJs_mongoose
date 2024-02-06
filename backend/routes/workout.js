const express = require('express')
const { createWorkout, getWorkout, oneWorkout,
    deleteWorkout, updateWorkout} = require('../controllers/workoutController')


const router = express.Router()

// GET all workout
router.get('/', getWorkout)

 // Get a single workout
 router.get('/:id', getWorkout)

 // POST a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout )

 //  Update a workout
 router.patch('/:id', updateWorkout)



module.exports = router 