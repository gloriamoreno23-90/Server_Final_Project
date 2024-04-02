const { Types } = require('mongoose');
const Exercise = require('../models/exercise.model');

const listAllExercises = async (_req, res, next) => {
  try {
    const exercises = await Exercise.find().sort({ createdAt: -1 }).lean();
    res.status(200).json(exercises);
  } catch (err) {
    next(err);
  }
};

const getOneExercise = async (req, res, next) => {
  try {
    const { exercise_id } = req.params;

    if (!Types.ObjectId.isValid(exercise_id)) {
      return res.status(400).json({ msg: 'Invalid exercise id!' });
    }

    const exercise = await Exercise.findById(exercise_id).select(
      '-createdAt -updatedAt'
    );
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found!' });
    }
    res.status(200).json(exercise);
  } catch (err) {
    next(err);
  }
};

const createOneExercise = async (req, res, next) => {
  const {
    name,
    description,
    duration,
    audio,
  } = req.body;
  try {
    if (!name || !description) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!duration || !audio) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    await Exercise.create({
      name,
      description,
      duration,
      audio,
    });

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const editOneExercise = async (req, res, next) => {
  try {
    const { exercise_id } = req.params;
    const {
      name,
      description,
      duration,
      audio,
    } = req.body;

    if (!name || !description) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!duration|| !audio) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!Types.ObjectId.isValid(exercise_id)) {
      return res.status(400).json({ msg: 'Invalid exercise id!' });
    }

    const exercise = await Exercise.findByIdAndUpdate(
      exercise_id,
      {
        name,
        description,
        duration,
        audio,
      },
      { new: true }
    ).select('-createdAt -updatedAt');

    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found!' });
    }

    res.status(200).json(exercise);
  } catch (err) {
    next(err);
  }
};

const deleteOneExercise = async (req, res, next) => {
  try {
    const { exercise_id } = req.params;

    if (!Types.ObjectId.isValid(exercise_id)) {
      return res.status(400).json({ msg: 'Invalid exercise id!' });
    }
    const exercise = await Exercise.findByIdAndDelete(exercise_id);
    if (!exercise) {
      return res.status(404).json({ msg: 'Exercise not found!' });
    }
    res.status(200).json({ msg: 'Exercise successfully deleted!' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listAllExercises,
  getOneExercise,
  createOneExercise,
  editOneExercise,
  deleteOneExercise,
};
