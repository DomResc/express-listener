import { port } from './config/env.config.js'

import express from 'express'
import { json } from 'body-parser'
import { routesConfig } from './src/routes/log.route'

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header('Access-Control-Expose-Headers', 'Content-Length')
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Authorization, Content-Type, X-Requested-With, Range'
  )
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  } else {
    return next()
  }
})

app.use(json())

routesConfig(app)

app.listen(port, function () {
  console.log('Porta usata: %s', port)
})
