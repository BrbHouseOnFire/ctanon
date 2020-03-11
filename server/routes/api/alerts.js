const router = require('express').Router();
const alertController = require('./../../controllers/alertController');

// match with /api/alert
router.route('/')
    .get(alertController.findAll)
    .post(alertController.create)
    
router.route('/up')
    .put(alertController.update)

router.route('/:id')
    .get(alertController.findById)
    .put(alertController.update)
    .delete(alertController.delete)

module.exports = router;