const router = require('express').Router()
const path = require('path')


router.get("/exercise", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
// app.get("*", (rec, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })
router.get("/stats", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router
//html routs link html files to specified url end point