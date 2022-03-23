'use strict'

import pokemons from './Pokemons/index.js'
import users from './Users/index.js'

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.register(pokemons, {prefix: 'pokemons'})
  fastify.register(users, {prefix: 'users'})
}
