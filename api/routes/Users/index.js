'use strict'

import { User } from "../../database.js"


export default async function(fastify, opts){
    fastify.post('/', async function(request){
        let user =  await User.findByPk(1)
        if(request.body.username === user.username && request.body.password === user.password)
            return true
        return false
    })
}