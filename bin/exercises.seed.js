const Exercise = require("../models/exercise.model")

const exercises = require("./exercises.json")
const mongoose = require("../db")
;(async () => {
  try {
    await Exercise.deleteMany()
    console.log("DB cleaned")

    const exercisesDB = await Exercise.insertMany(exercises)
    console.log(`Successful DB Seed with exercises ${exercisesDB}!`)
  } catch (error) {
    console.log("error", error)
  } finally {
    mongoose.connection.close()
  }
})()
