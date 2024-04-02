const router = require('express').Router();
const {
  listAllApplications,
  getOneApplication,
  createOneApplication,
  editOneApplication,
  deleteOneApplication,
} = require('../controllers/application.controller');

router.get('/list', listAllApplications);
router.get('/getOne/:application_id', getOneApplication);

router.post('/create', createOneApplication);

router.put('/edit/:application_id', editOneApplication);

router.delete('/delete/:application_id', deleteOneApplication);

module.exports = router;
