'use strict'

import { Pokemon, User } from '../../database.js'

async function connexion(fastify, username, password){
    let user =  await User.findByPk(1)
    if(username === user.username && password === user.password)
        return true
    return false
}

export default async function (fastify, opts) {
    fastify.get('/', async function(){
        return await Pokemon.findAll({
            attributes: ['id', 'name', 'type', 'price', 'image_path']
        })
    })

    fastify.get('/:id', async function(request){
        return await Pokemon.findByPk(request.params.id)
    })

    fastify.post('/', async function(request){
        if(await connexion(this, request.body.username, request.body.password)){
            return await Pokemon.create({
                name: request.body.name,
                type: request.body.type,
                price: request.body.price,
                image_path: request.body.image_path,
                description: request.body.description
            })
        } else {
            return false
        }
    })
    
    fastify.put('/', async function(request){
        if(await connexion(this, request.body.username, request.body.password)){
            let changes = {}
            if(request.body.name) 
                changes.name = request.body.name
            if(request.body.type) 
                changes.type = request.body.type
            if(request.body.price) 
                changes.price = request.body.price
            if(request.body.image_path) 
                changes.image_path = request.body.image_path
            if(request.body.description) 
                changes.description = request.body.description

            return await Pokemon.update(
                changes,
                { where : { id : request.body.id } }
            )
        }
        return false
    })

    fastify.post('/:id', async function(request){
        if(await connexion(this, request.body.username, request.body.password)){
            return Pokemon.destroy({
                where: {
                    id: request.params.id
                }
            })
        }
        return false
    })
}