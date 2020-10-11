const LogController = require('../controllers/log.controller')

exports.routesConfig = function (app) {
  app.post('/log', [LogController.create])
}
