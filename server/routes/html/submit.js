const router = require('express').Router();

const alertController = require('./../../controllers/alertController');

router.route('/submit')
.post(alertController.create);


module.exports = router;