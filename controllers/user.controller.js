const User = require('../models/user.model');

const getFavoriteApplications = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const user = await User.findById(user_id).populate('favoriteApplications').exec();
    console.log(user);
    res.status(200).json(user.favoriteApplications);
  } catch (err) {
    next(err);
  }
};

const likeApplication = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { application_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { favoriteApplications: application_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const dislikeApplication = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { application_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $pull: { favoriteApplications: application_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const getFavoriteExercises = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const user = await User.findById(user_id).populate('favoriteExercises').exec();
    console.log(user);
    res.status(200).json(user.favoriteExercises);
  } catch (err) {
    next(err);
  }
};

const likeExercise = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { exercise_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { favoriteExercises: exercise_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const dislikeExercise = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { exercise_id } = req.params;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $pull: { favoriteExercises: exercise_id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFavoriteApplications,
  likeApplication,
  dislikeApplication,
  getFavoriteExercises,
  likeExercise,
  dislikeExercise,
};