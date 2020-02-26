const router = require('express').Router();
const moviesController = require('./../../controllers/movieController');
// match with /api/movies
router.route('/')
    .get(moviesController.findAll)
    .post(moviesController.create);
    
router.route('/:id')
    .get(moviesController.findById)
    .put(moviesController.update)
    .delete(moviesController.delete)
module.exports = router;