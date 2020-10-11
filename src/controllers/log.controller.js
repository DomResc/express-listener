const LogModel = require('../models/log.model')

exports.create = (req, res) => {
  LogModel.create(req.body).then((result) => {
    res.status(201).send({ id: result._id })
  })
}
