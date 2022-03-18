import axios from 'axios'

const apiUrl = 'https://localhost:3001'

export const getAllPokemons = async () => {
    const res = await axios.get(`${apiUrl}/pokemons`)
    return res.data
}

export const getPokemon = async (id) => {
    const res = await axios.get(`${apiUrl}/pokmons/${id}`)
    return res.data
}

export const createPokemon = async(name, description, type, image_path, price) => {
    const res = axios.post(`${apiUrl}/`, {
        name,
        description,
        type,
        image_path,
        price
    })
    return res.data
}

export const updatePokemon = async(id, name, description, type, image_path, price) => {
    const res = axios.put(`${apiUrl}/`, {
        id,
        name, 
        description,
        type,
        image_path,
        price
    })
    return res.data
}

export const deletePokemon = async(id) => {
    const res = axios.delete(`${apiUrl}/${id}`)
    return res.data
}