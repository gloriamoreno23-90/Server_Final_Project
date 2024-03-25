const Application = require("../models/application.model")
const applications = require("./applications.json")
const mongoose = require("../db")
;(async () => {
  try {
    await Application.deleteMany();
    console.log("DB cleaned");

    const modelAdaptedApplication = application.map(
      ({
        name,
        description,
        url,
        features,
        exercises,
      }) => {
        return {
          name,
          description,
          url,
          features,
          exercises,
        };
      }
    );

    const applicationsDB = await Exercise.insertMany(applications)
    console.log(`Successful DB Seed with restaurants ${applicationsDB}!`)
  } catch (error) {
    console.log("error", error)
  } finally {
    mongoose.connection.close()
  }
})()
