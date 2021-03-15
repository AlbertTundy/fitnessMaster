const app = require("express").Router()
const Workout = require("../models/workoutSchema")

app.post("/workouts",(req,res)=>{
    Workout.create({})
    .then(function(dbWorkout){
        res.json(dbWorkout)
    }) .catch(function(err){
        res.json(err)
    })
})