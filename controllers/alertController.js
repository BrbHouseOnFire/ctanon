const db = require('../models');
module.exports = {
    //find all Alerts
    findAll: function(req, res) {
        db.Alert
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //find Alert by id
    findById: function(req, res) {
        db.Alert
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //create Alert
    create: function(req, res) {
        db.Alert
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //update Alert
    update: function(req, res) {
        db.Alert
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //delete Alert
    delete: function(req, res) {
        db.Alert
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}