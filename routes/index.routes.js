const router = require('express').Router();
const applicationRoutes = require('./application.routes');
const exerciseRoutes = require('./exercise.routes');
const authRoutes = require('./auth.routes');

router.use('/applications', applicationRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/auth', authRoutes);
router.use('/user', require('./user.routes'));

module.exports = router;