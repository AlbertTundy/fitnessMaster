const router = require("express").Router()
const Workout = require("../models/workoutSchema.js")

router.post("/api/workouts",(req,res)=>{
    Workout.create({})
    .then(function(dbWorkout){
        res.json(dbWorkout)
    }) .catch(function(err){
        res.json(err)
    })
})
module.exports = router;