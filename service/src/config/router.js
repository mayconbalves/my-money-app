const express = require('express')

module.exports = function(server) {
  // URL base

  const router = express.Router()
  server.use('/api', router)

  // Routers cicly payment

  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}