"use strict"

const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
  fastify.addHook("onSend", (request, reply, payload, done) => {
    reply.header("Access-Control-Allow-Origin", "http://localhost:5173")
    reply.header("Access-Control-Allow-Methods", "POST, GET")
    done()
  })
})
