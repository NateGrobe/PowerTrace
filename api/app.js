const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const usersRouter = require('./controllers/users')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting: to MongoDB:', error.message)
  })

app.use(express.json())

app.use('/api/users', usersRouter)

module.exports = app
