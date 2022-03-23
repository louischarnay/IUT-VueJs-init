'use strict'

import { connexion } from '../../../pokemon/src/services/api.js'
import { Pokemon } from '../../database.js'

export default async function (fastify, opts) {
    fastify.get('/', async function(){
        return await Pokemon.findAll({
            attributes: ['name', 'type', 'price', 'image_path']
        })
    })

    fastify.get('/:id', async function(request){
        return await Pokemon.findByPk(request.params.id)
    })

    fastify.post('/', async function(request){
        if(await connexion(request.body.username, request.body.password)){
            return await Pokemon.create({
                name: request.body.name,
                type: request.body.type,
                price: request.body.price,
                image_path: request.body.image_path,
                description: request.body.description
            })
        }
        return false
    })
    
    fastify.put('/', async function(request){
        if(await connexion(request.body.username, request.body.password)){
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

    fastify.delete('/:id', async function(request){
        if(await connexion(request.body.username, request.body.password)){
            return result = Pokemon.destroy({
                where: {
                    id: request.params.id
                }
            })
        }
        return false
    })
}