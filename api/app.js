'use strict'

import sensible from './plugins/sensible.js'
import support from './plugins/support.js'
import routes from './routes/index.js'
import fastifyCors from 'fastify-cors'
import './database.js'

export default async function (fastify, opts) {
  fastify.register(sensible)
  fastify.register(support)
  fastify.register(fastifyCors)
  fastify.register(routes)
}

