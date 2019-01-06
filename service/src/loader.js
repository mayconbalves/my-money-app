const server = require('./config/server')
require('./config/data-base')
require('./config/router')(server)