'use strict'

const fp = require('fastify-plugin')

const schema = {
  type: "object",
  required: ["mysqlConnectionString"],
  properties: {
    mysqlConnectionString: {
      type: "string"
    }
  }
}

const options = {
  schema: schema
}
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/env'), options)
})