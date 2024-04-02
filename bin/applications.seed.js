const Application = require("../models/application.model")

const applications = require("./applications.json")
const mongoose = require("../db")
;(async () => {
  try {
    await Application.deleteMany();
    console.log("DB cleaned");

    const applicationsDB = await Application.insertMany(applications)
    console.log(`Successful DB Seed with applications ${applicationsDB}!`)
  } catch (error) {
    console.log("error", error)
  } finally {
    mongoose.connection.close()
  }
})()
