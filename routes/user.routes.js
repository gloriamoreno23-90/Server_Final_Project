const { Router } = require('express');
const {
  getFavoriteApplications,
  likeApplication,
  dislikeApplication,
  getFavoriteExercises,
  likeExercise,
  dislikeExercise,
} = require('../controllers/user.controller');
const passport = require('passport');

const router = Router();

router.get(
  '/getFavoriteApplications',
  passport.authenticate('jwt', { session: false }),
  getFavoriteApplications,
  '/getFavoriteExercises',
  passport.authenticate('jwt', { session: false }),
  getFavoriteExercises,
);
router.put(
  '/likeApplication/:application_id',
  passport.authenticate('jwt', { session: false }),
  likeApplication,
  '/likeExercise/:exercise_id',
  passport.authenticate('jwt', { session: false }),
  likeExercise,
);
router.put(
  '/dislikeApplication/:application_id',
  passport.authenticate('jwt', { session: false }),
  dislikeApplication,
  '/dislikeExercise/:exercise_id',
  passport.authenticate('jwt', { session: false }),
  dislikeExercise
);


module.exports = router;
