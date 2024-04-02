const router = require('express').Router();
const {
  listAllExercises,
  getOneExercise,
  createOneExercise,
  editOneExercise,
  deleteOneExercise,
} = require('../controllers/exercise.controller');

router.get('/list', listAllExercises);
router.get('/getOne/:exercise_id', getOneExercise);

router.post('/create', createOneExercise);

router.put('/edit/:exercise_id', editOneExercise);

router.delete('/delete/:exercise_id', deleteOneExercise);

module.exports = router;