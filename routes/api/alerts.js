const router = require('express').Router();
const alertsController = require('../../controllers/alertController');
// match with /api/alerts
router.route('/')
    .get(alertsController.findAll)
    .post(alertsController.create);
    
router.route('/:id')
    .get(alertsController.findById)
    .put(alertsController.update)
    .delete(alertsController.delete)
module.exports = router;