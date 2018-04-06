var express = require('express');
var router = express.Router();
const Customer = require('../../data_source/postgres/models').Customer;

router.post('/add', function (req, res, next) {
        return Customer
            .create({
                name: req.body.name,
            })
            .then(cus => res.status(201).send(cus))
    .catch(error => res.status(400).send(error));

});

router.get('/get-all', function (req, res, next) {
    return Customer
        .all()
        .then(cus => res.status(201).send(cus))
    .catch(error => res.status(400).send(error));

});

module.exports = router;