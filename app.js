require('dotenv').config()

// DB connection
require('./config/db.config')

// Debug
require('./config/debug.config')

// App
const express = require('express')
const app = express()

// App settings
require('./config/session.config')(app)
require('./config/passport.config')(app)
require('./config/middleware.config')(app)

// Routes index
require('./routes')(app)

module.exports = app