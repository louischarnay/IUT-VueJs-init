'use strict'

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

    fastify.put('/create', async function(request){
        return await Pokemon.create({
            name: request.body.name,
            type: request.body.type,
            price: request.body.price,
            image_path: request.body.image_path,
            description: request.body.description
        })
    })
    
    fastify.put('/update', async function(request){
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
    })

    fastify.delete('/:id', async function(request){
        return result = Pokemon.destroy({
            where: {
                id: request.params.id
            }
        })
    })
}