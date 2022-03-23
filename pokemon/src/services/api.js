import axios from 'axios'

const apiUrl = 'http://localhost:3001'

export const getAllPokemons = async () => {
    const res = await axios.get(`${apiUrl}/pokemons/`)
    return res.data
}

export const getPokemon = async (id) => {
    const res = await axios.get(`${apiUrl}/pokemons/${id}`)
    return res.data
}

export const createPokemon = async(username, password, name, description, type, image_path, price) => {
    const res = axios.post(`${apiUrl}/pokemons/`, {
        username,
        password,
        name,
        description,
        type,
        image_path,
        price
    })
    return res
}

export const updatePokemon = async(username, password, id, name, description, type, image_path, price) => {
    const res = axios.put(`${apiUrl}/pokemons/`, {
        username,
        password,
        id,
        name, 
        description,
        type,
        image_path,
        price
    })
    return res.data
}

export const deletePokemon = async(username, password, id) => {
    const res = axios.delete(`${apiUrl}/pokemons/${id}`, {
        username,
        password,
    })
    return res.data
}

export const connexion = async(username, password) => {
    let res = await axios.post(`${apiUrl}/users/`, {
        username,
        password
    })
    return res.data
}